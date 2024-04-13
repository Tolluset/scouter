"use client";

import { Alert } from "@/components/ui/alert";
import { useFormStatus } from "react-dom";

interface Props {
  message: string;
}

export default function AlertMessage({ message }: Props) {
  const { pending } = useFormStatus();

  return (
    <div className="relative pt-4">
      {message && !pending && (
        <Alert
          variant="destructive"
          className="absolute text-center animate-fade-in"
        >
          {message === "signin_failed"
            ? "로그인에 실패했어요"
            : message === "signup_failed"
              ? "회원가입에 실패했어요"
              : "알 수 없는 오류가 발생했어요"}
        </Alert>
      )}
    </div>
  );
}
