/**
  *formate date to yyyy-MM-ddThh:mm:ss for input field date time to support
  @param Date
  @return string
*/
let formateDateString = (dateTime) => {
  return `${dateTime.getFullYear()}-${(dateTime.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${dateTime
    .getDate()
    .toString()
    .padStart(2, "0")}T${dateTime
    .getHours()
    .toString()
    .padStart(2, "0")}:${dateTime
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${dateTime.getSeconds().toString().padStart(2, "0")}`;
};

/**
   * check if  date time is valid and return error message if exist othrewise return timer
   @param Date
   @returns {error,timer}
   */
let checkIfDateIsValid = (_dateTime) => {
  if (!_dateTime) {
    return { error: "" }; //output empty error because we can't set undefined to react state
  }

  let timer = _dateTime - new Date();
  if (timer <= 0) {
    return { error: "Time can not be older than current date time" };
  }
  if (timer / (3600 * 1000 * 24) > 99) {
    return { error: "Countdown days can't be more than 100 days" };
  }

  return { timer, error: "" };
};

export { formateDateString, checkIfDateIsValid };
