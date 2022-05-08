import React from "react";
import UserLayout from "../../utils/UserLayout";
import CauseCard from "../../components/CauseCard";
import { useMemo } from "react";

const Donations = () => {
    const causes = useMemo(
        () => [
            {
                id: 0,
                title: "Dummy title",
                zone: "Ukraine",
                target: "100000",
                raisedMoney: "5000"
            },
            {
                id: 1,
                title: "Dummy title",
                zone: "Ukraine",
                target: "10000",
                raisedMoney: "5000"
            },
            {
                id: 2,
                title: "Dummy title",
                zone: "Ukraine",
                target: "10000",
                raisedMoney: "8000"
            }
        ], []
    );

    return (
        <UserLayout>
            <div className="causes">
                {causes.map((cause, index) => (
                    <CauseCard key={index} {...cause} />
                ))}
            </div>
        </UserLayout>
    );
};


export default Donations;