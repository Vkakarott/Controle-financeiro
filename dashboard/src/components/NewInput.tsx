import { Popover, PopoverContent } from "@/components/ui/popover";
import { SelectComponent } from "./SelectComponent";

interface PopoverComponentProps {
    isOpen: boolean;
    onclose: () => void;
    currency: string;
}

export function PopoverInput({ isOpen, onclose, currency }: PopoverComponentProps) {
    return (
        <Popover 
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) onclose();
            }}
        >
            <PopoverContent className="w-80 absolute top-56 left-72 bg-[var(--cards)] rounded-lg border-[var(--zinc)] ">
                <form className="flex flex-col gap-3 p-5 text-white">
                    <div className="flex flex-col">
                        <h4 className="font-medium leading-none">New Transaction</h4>
                        <p className="text-sm text-muted-foreground">
                            Set new transaction.
                        </p>
                    </div>
                    <div className="flex w-full items-center mt-3 gap-5">
                        <div className="flex items-center">
                            <input type="radio" name="transactionType" value="income" className="w-4 h-4 accent-zinc-300" id="income" />
                            <label htmlFor="income" className="text-sm px-2 text-muted-foreground">Incomes</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" name="transactionType" value="expense" className="w-4 h-4 accent-zinc-300" id="expense" />
                            <label htmlFor="expense" className="text-sm px-2 text-muted-foreground">Expenses</label>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="text-sm">{currency}</label>
                        <input type="number" className="w-full bg-transparent p-1 px-3 border border-[var(--zinc)] rounded" />
                    </div>
                    <div className="flex items-center gap-2">
                        <SelectComponent />
                    </div>
                    <div className="flex w-full justify-end">
                        <button type="submit" className="w-24 font-bold text-sm p-2 mt-5 bg-white text-black rounded">Add</button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}
