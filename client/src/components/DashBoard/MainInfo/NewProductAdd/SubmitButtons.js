import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db, storage } from "../../../../services/firebase";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function SubmitButtons({ formData }) {
  const [save, setSave] = useState(false);
  const { user } = useSelector((state) => {
    return state.user;
  });
  useEffect(() => {
    if (save) {
      if (formData.images.length > 0 && formData.formData && formData.desc) {
        localStorage.setItem(
          "savedProduct",
          JSON.stringify({ formData: formData.formData, desc: formData.desc })
        );
      }
      setSave(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [save]);
  async function addNewItem(link) {
    await setDoc(doc(db, "users", user.uid, "products", uuidv4()), {
      ...formData.formData,
      productImg: link,
      description: formData.desc,
      createdAt: serverTimestamp()
    });
  }
  async function uploadImageToStorageBucket(file) {
    let name = file.name.split(".");
    const fileRef = ref(
      storage,
      "productImages/" + name[0] + uuidv4() + "." + name[1]
    );
    const snap = await uploadBytes(fileRef, file);
    const picUrl = await getDownloadURL(fileRef);
    addNewItem(picUrl);
  }
  return (
    <div className="mt-4  absolute bottom-[17.28px] right-[17.28px] space-x-3">
      <button
        onClick={() => {
          let keys = Object.keys(formData.formData);
          let eachVal = keys.some((key) => {
            return !formData.formData[key];
          });
          if (!eachVal && formData.desc && formData.images.length > 0) {
            formData.images.forEach((file) => {
              uploadImageToStorageBucket(file);
            });

            // addNewItem();
          }
        }}
        className="bg-[#FF385C] hover:shadow-sm_dark  transition-all duration-300 text-small border-[#FF385C] border-[.5px] font-medium text-white p-2 px-3 rounded-sm"
      >
        Add Product
      </button>
      <button
        className="border-[#FF385C] border-[.5px] hover:shadow-sm_dark  transition-all duration-300 text-small text-[#FF385C] font-medium  p-2 px-3 rounded-sm"
        onClick={() => {
          setSave(true);
        }}
      >
        Save Product
      </button>
    </div>
  );
}

export default SubmitButtons;
