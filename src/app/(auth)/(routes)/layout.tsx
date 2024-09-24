import { Logo } from "@/components/Logo";
import React from "react";

export default function layoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center h-full items-center">
      <Logo />
      <h1 className="text-3xl my-2">Bienvenidos</h1>
      <h2 className="text-2xl mb-3">Company dashboard</h2>
      {children}
    </div>
  );
}
