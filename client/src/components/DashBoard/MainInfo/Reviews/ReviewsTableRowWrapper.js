import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../../../../services/firebase";
import ReviewsTableRow from "./ReviewsTableRow";

function ReviewsTableRowWrapper({
  setActionWithId,
  type,
  setCommentReply,
  admin,
  tableData,
  incDecEngagement
}) {
  let firstRender = useRef(false);
  const [data, setData] = useState(tableData.reviews);
  function setReply(value) {
    setData((prev) => {
      const updateData = prev.map((item, idx) => {
        if (idx === value.idx) {
          return {
            ...item,
            reply: {
              replyComment: { comment: value.value, admin: admin.name },
              timestamp: new Date()
            }
          };
        }
        return item;
      });
      return updateData;
    });
  }
  useEffect(() => {
    async function update() {
      try {
        let promises = [];
        tableData.reviews.forEach((element) => {
          promises.push(
            updateDoc(
              doc(db, "users", admin.uid, "productReviews", tableData.id),
              {
                reviews: arrayRemove({ ...element })
              }
            )
          );
        });
        await Promise.all(promises);
        await updateDoc(
          doc(db, "users", admin.uid, "productReviews", tableData.id),
          {
            reviews: arrayUnion(...data)
          }
        );
      } catch (err) {
        console.log(err.message);
      }
    }
    firstRender.current && update();
    firstRender.current = true;
  }, [data]);

  return (
    <div>
      {data.map((review, idx) => {
        return (
          <ReviewsTableRow
            setActionWithId={setActionWithId}
            type="reviews"
            key={idx}
            idx={idx}
            setReply={setReply}
            tableData={review}
          ></ReviewsTableRow>
        );
      })}
    </div>
  );
}

export default ReviewsTableRowWrapper;
