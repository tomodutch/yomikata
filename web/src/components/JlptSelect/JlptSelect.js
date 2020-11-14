export const JlptSelect = ({ onChange }) => (
  <div
    className="select"
    onChange={(e) => {
      const { value } = e.target
      if (value === '0') {
        onChange(null)
      } else {
        onChange(parseInt(e.target.value))
      }
    }}
  >
    <select>
      <option value="5">N5 (beginner)</option>
      <option value="4">N4 (basic)</option>
      <option value="3">N3 (lower intermediate)</option>
      <option value="2">N2 (intermediate)</option>
      <option value="1">N1 (advanced)</option>
      <option value="0">All levels</option>
    </select>
  </div>
)

export default JlptSelect
