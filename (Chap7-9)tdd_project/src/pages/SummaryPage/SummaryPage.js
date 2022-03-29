import React from 'react'

function SummaryPage() {
  return (
    <div>
        <form>
            <input 
            type="checkbox"
            checked={false}
            //onChange={(e) => setChecked(e.target.checked)}
            id="confirm-checkbox"
            /> {" "}
            <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요1?</label>
            <br/>
            <button disabled={true} type="submit">
                주문 확인
            </button>
        </form>
    </div>
  )
}

export default SummaryPage