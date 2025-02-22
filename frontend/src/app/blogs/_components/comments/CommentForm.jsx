"use client";

import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import Loading from "app/blogs/Loading";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};

const CommentForm = ({ postId, parentId, onClose }) => {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initialState);
  // let isLoading = false;

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  // const createCommentWithData = createComment.bind(null, postId, parentId);
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            className="space-y-7"
            // action={createComment.bind(null, postId, parentId)}
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
            }}
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <div className="mt-8">
              <SubmitButton type="submit" className="w-full">
                {parentId ? "ثبت پاسخ" : "ثبت نظر"}
              </SubmitButton>
              {/* {isLoading ? (
                <div>
                  <Loading />
                </div>
              ) : (
                <SubmitButton type="submit" className="w-full">
                  {parentId ? "ثبت پاسخ" : "ثبت نظر"}
                </SubmitButton>
              )} */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
