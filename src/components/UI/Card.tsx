"use client";
import { FC } from "react";

interface CardProps {
    name: string;
    duration: string;
    description: string;
    price: string;
    onView: void;
    onReserve: void;
}

export const Card: FC<CardProps> = ({
    name,
    duration,
    description,
    price,
    onView,
    onReserve
}) => {
    return (
        <div>

        </div>
    )
}