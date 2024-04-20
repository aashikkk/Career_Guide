import React from "react";
import EventCard from "./EventCard";

import { Button } from "flowbite-react";

function EventCalender() {
    return (
        <div className="mx-20 mt-10 px-10 pl-20">
            <div className="flex flex-wrap ">
                <div className="font-bold text-black text-2xl flex-initial lg:flex-1 py-1 basis-3/4">
                    Event Calender
                </div>
                <div>
                    <Button
                        gradientDuoTone="purpleToPink"
                        outline
                        name="viewAllBtn"
                    >
                        View All
                    </Button>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 gap-4 py-20">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    );
}

export default EventCalender;
