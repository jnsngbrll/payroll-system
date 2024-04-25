function calculateSalary() {
  const employeeName = document.getElementById('employeeName').value;
  const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
  const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
  const taxPercentage = parseFloat(
    document.getElementById('taxPercentage').value
  );

  const fulltime = document.getElementById('fullTime');
  const partTime = document.getElementById('partTime');

  const result = document.getElementById('result');

  if (fulltime.checked) {
    const totalSalary = hourlyRate * hoursWorked;
    const taxAmount = (totalSalary * taxPercentage) / 100;
    const netSalary = totalSalary - taxAmount;
    result.innerHTML = `
            Total Salary: ${totalSalary}<br/>
            Tax Amount: ${taxAmount}<br/>
            Net Salary: ${netSalary}<br/>
            Employment Type: Full Time
            `;
  } else if (partTime.checked) {
  }

  const payrollSystem = document.getElementById('payrollSystem');
  payrollSystem.innerHTML = `Payroll System: ${employeeName}`;
}
