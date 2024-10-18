function percentage_operator(percent) {
  // Regular expression to find numbers followed by '%'
  let regex = /([0-9\.]+)([%])/g;

  // Replace percentages with their correct mathematical value
  percent = percent.replace(regex, function (match, number) {
    return number / 100; // Convert percentage to decimal form
  });

  return percent;
}
