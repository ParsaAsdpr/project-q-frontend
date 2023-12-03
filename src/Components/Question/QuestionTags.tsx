import React, { useState } from "react";
import { motion } from "framer-motion";

interface QuestionTags {
  onTagsChange: (tags: string[]) => void;
}

const TagWriter: React.FC<QuestionTags> = ({ onTagsChange }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const newTag = inputValue.trim();
    if (newTag !== "" && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setInputValue("");
      onTagsChange([...tags, newTag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    onTagsChange(updatedTags);
  };

  return (
    <div className="flex flex-col gap-1 mb-2">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          className="w-full outline-none border border-[#dddddd] bg-[#f6f6f6] py-2 px-3 rounded-[5px] 
          text-sm focus:border-[#47aa76] duration-300"
          placeholder="موضوعات خود را اضافه کنید. مثال (برنامه نویسی,)"
        />
      </div>
      <div className="flex gap-[3px] flex-wrap">
        {tags.map((tag) => (
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            key={tag}
            onClick={() => removeTag(tag)}
            className="flex flex-row-reverse items-center p-1.5 gap-2 text-xs text-[#419c6a] bg-[#cef5df] border border-[#419c6a] rounded-sm cursor-pointer"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default TagWriter;
