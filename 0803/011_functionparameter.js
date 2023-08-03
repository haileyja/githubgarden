function test(a, b, c) {
    console.log(a, b, c)
    return a + b + c
}

//이 두개는 다른언어에서는 error가 남 .
test(10, 20)  //모자라면 undefined 로 채워짐
test(10, 20, 30, 40) // 넘기면 제대로 작동함

function test(a=10, b=20, c=30) {
    console.log(a, b, c)
    return a + b + c
}

test(100, 200)
test()

//혼란의 도가니 
test(a=100, b=200)//330
test(b=100, c=200)// 왜 330인가요 ?
//javascript는 값을 순서대로 넣습니다.
// test(100, ,200) // error
// javascript는 값을 순서대로 넣습니다.

// 이것을 해결하기 위해 RORO로 기법이 등장합니다.
// RORO: 객체로 받고 객체로 반환한다(Receive an object, return an object)

function mob(scene, x, y, texture, animKey, initHp, dropRate){
 //scenen: 스토리신, 플레이신, 엔딩신 
 //x,y: 몹의 위치
 //texture: 몹의 이름
 //animkey:몹의 애니메이션
 //initHp: 몹의 체력
 //dropRate: 몹이 아이템을 떨어뜨리는 확률
 return
}

//위 문제와 아래 문제를 해결하기위해 RORO를 사용할수 있음.
//mob('플레이신', 100,200, '슬라임', '슬라임_애니', 100, 0.1)
//mob('플레이신', ..뭐가 들어가야하지?)

function player({scene, x, y, texture, animKey, initHp, dropRate}){
    return 
}
player({scene:'플레이신', 
            x:100,
            y:200, 
            texture:'슬라임', 
            animkey:'슬라임_애니', 
            initHp:100, 
            dropRate:0.1
        })
       
        // 아래와 같이 작성되기 때문에 1번째 문제 해결
player({
    scene: '플레이신',
    y: 200,
    initHp: 100,
})

//기본값 설정하는 방법
function player({scene = '플레이신', x = 0, y = 0, texture, animkey,initHp,dropRate}){
  console.log(scene, x, y,initHp)
}

player({
    initHp:100
})