interface Props {
  placeholder: string;
  text: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  name?: string;
  id?: string;
}

const TextInput = ({
  placeholder,
  text,
  value,
  onChange,
  className,
  type,
  name,
  id,
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={id} className="text-right px-2">
        {text}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={`w-full outline-none border border-[#dddddd] bg-[#f6f6f6] py-3 px-3 
        rounded-[3px] text-sm focus:border-[#47aa76] duration-300 ${className}`}
        placeholder={placeholder}
        value={value}
        dir="rtl"
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default TextInput;
