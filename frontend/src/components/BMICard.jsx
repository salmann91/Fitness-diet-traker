export default function BMICard({ weight, height }) {
  const calculateBMI = () => {
    if (!weight || !height) return null;
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { text: 'Underweight', color: '#3498db' };
    if (bmi < 25) return { text: 'Normal', color: '#2ecc71' };
    if (bmi < 30) return { text: 'Overweight', color: '#f39c12' };
    return { text: 'Obese', color: '#e74c3c' };
  };

  const bmi = calculateBMI();
  if (!bmi) return null;

  const category = getBMICategory(bmi);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
      <h3 className="text-xl font-bold mb-4">📊 BMI Calculator</h3>
      <div className="text-5xl font-bold mb-2" style={{ color: category.color }}>
        {bmi}
      </div>
      <div className="text-xl font-semibold" style={{ color: category.color }}>
        {category.text}
      </div>
    </div>
  );
}
