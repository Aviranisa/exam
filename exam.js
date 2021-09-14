const removeDuplicatedromArray = (array) => {
  let uniqueElements = [];
  array.forEach((element) => {
    if (!uniqueElements.includes(element)) {
      uniqueElements.push(element);
    }
  });
  return uniqueElements;
};

const topNStudentsAttendees = (students, attendees, N) => {
  let attendance = [];
  students.forEach((student) => {
    let obj = { name: student, attended: 0 };
    attendance.push(obj);
  });
  attendees.forEach((lectureAttendees) => {
    lectureAttendees = removeDuplicatedromArray(lectureAttendees);
    lectureAttendees.forEach((attendee) => {
      if (students.includes(attendee)) {
        attendance.forEach((student) => {
          if (student.name == attendee) {
            student.attended++;
          }
        });
      }
    });
  });
  attendance.sort(function (a, b) {
    return b.attended - a.attended;
  });
  attendance.splice(N, attendance.length);
  return studentsToShow;
};

console.log(
  topNStudentsAttendees(
    ["Eden", "Refael", "Yoni", "Nitzan", "Hadas"],
    [
      ["Eden", "Refael", "Yoni", "Nitzan", "Hadas", "Ortal"],
      ["Berry", "Nitzan", "Yoni", "Eden", "Hadas", "Ortal"],
      ["Maxim", "Ortal", "Yoni", "Refael", "Nitzan", "Alex"],
      ["Eden", "Andrew", "Yoni", "Nitzan", "Ortal", "Nitzan"],
    ],
    3
  )
);
