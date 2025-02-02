"use client";

import { useState } from "react";

import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import AddBlueprintForm from "@/components/AddBlueprintForm/AddBlueprintForm";

export const AddBlueprintButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Add Blueprint
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Blueprint</DialogTitle>
          <DialogDescription>
            Please fill out the form accurately and double-check all details
            before submitting the blueprint.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[65vh] overflow-y-auto p-2">
          <AddBlueprintForm />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
