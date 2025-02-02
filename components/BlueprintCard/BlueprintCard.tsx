import Image from "next/image";

import { cn } from "@/lib/utils";

import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";

import { BLUEPRINT_QUALITY_AND_COLOR } from "@/lib/blueprintQuality";

import type { Blueprint } from "@/types/index.types";

type BlueprintCardProps = React.HTMLAttributes<HTMLDivElement> & {
  blueprint: Blueprint;
  width?: number | `${number}`;
  height?: number | `${number}`;
};

const BlueprintCard = ({
  blueprint,
  width,
  height,
  className,
  ...props
}: BlueprintCardProps) => {
  const blueprintColor = BLUEPRINT_QUALITY_AND_COLOR[blueprint.quality].color;
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{blueprint.name}</h3>
        <p className="text-s text-muted-foreground">
          {blueprint.category}: {blueprint.quality}
        </p>
      </div>
      <ContextMenu>
        <ContextMenuTrigger>
          <div
            className="overflow-hidden rounded-md cursor-pointer"
            style={{ background: blueprintColor }}
          >
            <Image
              src={blueprint.image}
              alt={blueprint.name}
              className={
                "aspect-[3/2] object-contain transition-all hover:scale-105 opacity-80"
              }
              width={width}
              height={height}
            />
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <ul className="text-black font-bold flex flex-wrap gap-2">
          {blueprint.resources.map((resource, index) => (
            <li key={index} className="flex">
              {resource.quantity.toLocaleString()}×
              <Image
                src={resource.icon}
                alt={resource.name}
                className={"h-5 w-5 object-contain"}
                height={20}
                width={20}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlueprintCard;
