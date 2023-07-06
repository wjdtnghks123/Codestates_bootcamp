const addClick = async () =>{
    const ID = document.getElementById('ID').value  // ID 의 Name 은 수정 해야함. 
    // 여기서 예시 데이터 각각 생성

    axios.post('http://localhost:8080/ad/add',{
        ID: ID,
    }).then(function(res) {
        console.log(res.data.data.result) // res.data.data.result.ID 처럼 사용가능
    }).catch(function(err) {
        console.log(err)
    })
}