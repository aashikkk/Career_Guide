"use client";
import React from "react";
import { Table, Button } from "flowbite-react";

function JobsBanner() {
    return (
        <div className=" mx-20 my-10 px-10 pl-20 ">
            <div className="flex flex-wrap ">
                <div className="font-bold text-black text-2xl flex-initial lg:flex-1 py-1 basis-3/4">
                    Hot Jobs
                </div>
                <div>
                    <Button
                        outline
                        gradientDuoTone="purpleToPink"
                        name="viewAllBtn"
                    >
                        View All
                    </Button>
                </div>
            </div>
            <div className="mt-10">
                <div className="overflow-x-auto">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>Vacancy</Table.HeadCell>
                            <Table.HeadCell>Type</Table.HeadCell>
                            <Table.HeadCell>Company</Table.HeadCell>
                            <Table.HeadCell>Location</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {'Apple MacBook Pro 17"'}
                                </Table.Cell>
                                <Table.Cell>Sliver</Table.Cell>
                                <Table.Cell>Laptop</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Microsoft Surface Pro
                                </Table.Cell>
                                <Table.Cell>White</Table.Cell>
                                <Table.Cell>Laptop PC</Table.Cell>
                                <Table.Cell>$1999</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Magic Mouse 2
                                </Table.Cell>
                                <Table.Cell>Black</Table.Cell>
                                <Table.Cell>Accessories</Table.Cell>
                                <Table.Cell>$99</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default JobsBanner;
