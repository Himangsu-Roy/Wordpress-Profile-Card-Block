import { useState } from "react";
import { DatePicker } from "@wordpress/components";

const MyUserDateOfBirthPicker = () => {
  const [date, setDate] = useState(new Date());
  console.log(date);

  return (
    <DatePicker
      currentDate={date}
      onChange={(newDate) => setDate(newDate)}
      is12Hour={true}
    />
  );
};

export default MyUserDateOfBirthPicker;
