import { useState } from "react";
import { DatePicker, DateTimePicker } from "@wordpress/components";

const MyUsefulDateTimePicker = () => {
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

export default MyUsefulDateTimePicker;
