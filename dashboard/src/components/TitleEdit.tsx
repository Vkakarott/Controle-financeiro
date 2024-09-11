import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from "@/components/Button";

interface TitleEditProps {
    initialValue: string;
    onChange?: (value: string) => void;
}

export default function TitleEdit({ initialValue, onChange }: TitleEditProps) {
    const [value, setValue] = useState(initialValue);
    const [isEditable, setIsEditable] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setIsEditable(false);
            if (onChange) {
                onChange(value);
            }
        }
    }

    return (
        <div className="flex items-center">
            {isEditable ? (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="px-4 py-2 bg-transparent border border-[var(--zinc)] rounded-lg shadow-md"
                    required
                    autoFocus
                />
            ) : (
                <div className="flex w-72 justify-between items-center gap-5 p-2">
                    <h1 className="flex">{value}</h1>
                    <Button ariaLabel="Edit" onClick={() => setIsEditable(true)}>
                        <i className="bi bi-pencil"></i>
                    </Button>
                </div>
            )}
        </div>
    );
}