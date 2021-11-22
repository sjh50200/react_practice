const v1 = 'ab' && 0 && 2; // v1 === 0
const v2 = 'ab' && 2 && 3; // v2 === 3
const v3 = 'ab' || 0; // v3 === 'ab'
const v4 = '' || 0 || 3; // v4 === 3
<div>
{/* boolean 명시 */}
<div>
 {!!cash && <p>{cash}원 보유 중</p>}
 {!!memo && <p>{200 - memo.length}자 입력 가능</p>}
</div>

{/* 0이 아니면 표시 */}
<div>
 {cash != null && <p>{cash}원 보유 중</p>}
 {memo != null && <p>{200 - memo.length}자 입력 가능</p>}
</div>
</div>