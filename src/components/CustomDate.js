import moment from "moment";

export const getAntdFormInputRules = [
  {
    required: true,
    message: "Required",
  },
];

export const CustomDateFormat = (date) => {
  return moment(date).format("MMMM Do YYYY, h:mm A");
}