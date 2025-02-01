import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type ScrollableGridProps = {
  children: React.ReactNode;
  orientation: "vertical" | "horizontal";
};

const ScrollableGrid = ({ children, orientation }: ScrollableGridProps) => {
  return (
    <div className="relative">
      <ScrollArea>
        {children}
        <ScrollBar orientation={orientation} />
      </ScrollArea>
    </div>
  );
};

export default ScrollableGrid;
