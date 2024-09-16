"use client";

interface CardProps {
  children: any;
}

export default function Card(props: CardProps) {
  return (
    <div className="aspect-square drop-shadow-lg border-2 p-3 rounded-lg w-full items-center justify-content-center">
      {props.children}
    </div>
  );
}
