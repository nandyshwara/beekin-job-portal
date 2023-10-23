import {Triangle } from "react-loader-spinner";

export default function Loading({ className }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
      className={className}
    >
      <Triangle width={140} color="#277ffe" />
    </div>
  );
}
