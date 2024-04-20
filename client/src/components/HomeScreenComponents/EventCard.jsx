"use client";

import React from "react";
import { Card } from "flowbite-react";

function EventCard() {
    return (
        <div>
            <Card className="max-w-sm">
                <div>Apr 15, 05.00 PM</div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Open Day Virtual Event
                </h5>
                <p className="font-normal italic text-gray-700 dark:text-gray-400">
                    IEEE Student Branch, UOM
                </p>
            </Card>
        </div>
    );
}

export default EventCard;
