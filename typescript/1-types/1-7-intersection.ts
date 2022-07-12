{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  // 인자로 줄 때 Student와 Worker 모두를 전달해주어야 한다
  internWork({
    name: "junhong",
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
