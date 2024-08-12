"use client";

import { Category } from "@prisma/client";
import { FcFilm, FcEnteringHeavenAlive, FcGlobe, FcPhoneAndroid, FcPrivacy, FcElectronics, FcCommandLine } from "react-icons/fc";
import { IconType } from "react-icons/lib";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
    items: Category[];
}
const iconMap: Record<Category["name"],IconType> = {
    "Mobile App Development": FcPhoneAndroid,
    "Graphic Design": FcFilm,
    "Web Development": FcGlobe,
    "Cybersecurity": FcPrivacy,
    "Cloud": FcEnteringHeavenAlive,
    "Artificial Intelligence": FcElectronics,
    "Computer Science": FcCommandLine,
}

export const Categories = ({
    items,
}: CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
                <CategoryItem
                key={item.id}
                label={item.name}
                icon={iconMap[item.name]}
                value={item.id} />
            ))}
        </div>
    )
}