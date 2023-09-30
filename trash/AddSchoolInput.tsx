import React from "react";
import { Form, Col } from "react-bootstrap";

interface AddSchoolInputProps {
  label?: string;
  type: string;
  value: string | number | boolean;
//   value: unknown;
  onChange: (value: string | number) => void;
  controlId: string;
  placeholder?: string;
  options?: string[];
  defaultValue?: string;
  termsCondition?: boolean;
  logo?: string;
}
const AddSchoolInput: React.FC<AddSchoolInputProps> = ({termsCondition, controlId,label,placeholder,type,value, onChange, options,defaultValue}) => {
  return (
//   <Form.Group as={Col} controlId={controlId}>
//    {options ? (
//       <>
//         <Form.Label>{label}</Form.Label>
//         <Form.Select
//           defaultValue={defaultValue || "Choose..."}
//           onChange={(e) => onChange(e.target.value)}
//         >
//           <option>select</option>
//           {options.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </Form.Select>
//       </>
//     ) 
//     : type === " radio" ?
//     (
//         <>
//          <Form.Label>{label}</Form.Label>
//           <Form.Check
//             type="radio"
//             id={`${controlId}-true`}
//             label="true" // Use the label for a single input
//             checked={value === "true"} // Check the radio if value is true
//             onChange={() => onChange("true")}
//           />
//            <Form.Check
//           type="radio"
//           id={`${controlId}-false`}
//           label="false"
//           checked={value === "false"}
//           onChange={() => onChange("false")}
//         />           
//           </>
//     ) :(
//         <>
//         <Form.Label>{label}</Form.Label>
//             <Form.Control
//               type={type}
//               value={value as string}
//               id={controlId}
//               onChange={(e) => onChange(e.target.value)}
//               placeholder={placeholder}
//             />
//         </>
//     )}
//   </Form.Group>
<Form.Group as={Col} controlId={controlId}>
{options ? (
  <>
    <Form.Label>{label}</Form.Label>
    <Form.Select
      defaultValue={defaultValue || "Choose..."}
      onChange={(e) => onChange(e.target.value)}
    >
      <option>select</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Form.Select>
  </>
) 
// : termsCondition ? (
//     // Render a checkbox input for Terms and Conditions
//     <>
//       <Form.Check
//         type="checkbox"
//         id={controlId}
//         label={label}
//         value={value}
//         onChange={() => onChange(value)}
//       />
//     </>
//   ) 
  : (
    // Render a regular input field for other cases
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        value={value as string | number}
        id={controlId}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </>
  )}
</Form.Group>
  );
};

export default AddSchoolInput;
