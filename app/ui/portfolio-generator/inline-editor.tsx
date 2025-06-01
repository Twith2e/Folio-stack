import { usePortfolioDispatch } from "@/app/contexts/portfolio-state-context";
import { InlineEditablePropsType } from "@/app/definitions";

export default function InlineEditor({
  value,
  placeholder,
  actionType,
  field,
}: InlineEditablePropsType) {
  const dispatch = usePortfolioDispatch();

  function onBlur(e: React.FocusEvent<HTMLDivElement>) {
    if (dispatch)
      dispatch({
        type: actionType,
        payload: {
          value: e.currentTarget.textContent?.trim() || "",
          field,
        },
      });
  }

  return (
    <span
      contentEditable
      suppressContentEditableWarning
      onBlur={onBlur}
      className="inline-block border-b border-dashed border-gray-300 focus:border-solid focus:border-indigo-500 px-1 text-black bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      {value || <span className="text-gray-400">{placeholder}</span>}
    </span>
  );
}
