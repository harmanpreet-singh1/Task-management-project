import { X } from "react-feather";
import { ILabel } from "../../Interfaces";

// Interface defining props for the Chip component
interface ChipProps {
  item: ILabel;
  removeLabel?: (label: ILabel) => void;
}

// Functional component representing a chip (label). This is getting used in List or Modal component.
export default function Chip(props: ChipProps) {
  const { item, removeLabel } = props;

  return (
    <label style={{ backgroundColor: item.color, color: "#fff" }}>
      {item.text}
      {removeLabel && <X onClick={() => removeLabel(item)} />}
    </label>
  );
}
