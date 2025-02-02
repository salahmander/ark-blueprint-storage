import BlueprintCard from "@/components/BlueprintCard/BlueprintCard";
import BlueprintEmptyPlaceholder from "@/components/BlueprintEmptyPlaceholder/BlueprintEmptyPlaceholder";
import ScrollableGrid from "@/components/ScrollableGrid/ScrollableGrid";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { BLUEPRINTS } from "@/data/data";
import AppSidebar from "@/components/AppSidebar/AppSidebar";

const BlueprintSelection = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </header>
        <div className="h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-1 md:col-span-3 lg:col-span-5 lg:border-l">
            <div className="h-full px-4 py-2 lg:px-8">
              <div className="space-y-6">
                <div className="space-between flex items-center">
                  <div className="hidden md:block lg:block ml-auto mr-4"></div>
                </div>
                <div className="mt-3 space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Best Blueprints
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    These are the best blueprints we currently have for each
                    item; we recommend crafting from these.
                  </p>
                </div>
                <Separator className="my-4" />
                <ScrollableGrid orientation="horizontal">
                  <div className="flex space-x-4 pb-4">
                    {BLUEPRINTS.map((blueprint) => (
                      <BlueprintCard
                        key={blueprint.name}
                        blueprint={blueprint}
                        className="w-[230px]"
                      />
                    ))}
                  </div>
                </ScrollableGrid>
                <div className="border-none p-0 outline-none">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Blueprints
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        For any crafting requests, please reach out to someone
                        with the blueprint role. Ensure you have the necessary
                        resources before making your request.
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  {BLUEPRINTS.length === 0 ? (
                    <BlueprintEmptyPlaceholder />
                  ) : (
                    <ScrollableGrid orientation="vertical">
                      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
                        {BLUEPRINTS.map((blueprint) => (
                          <BlueprintCard
                            key={blueprint.name}
                            blueprint={blueprint}
                          />
                        ))}
                      </div>
                    </ScrollableGrid>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default BlueprintSelection;
