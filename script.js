let noButtonClickCount = 0; // Số lần nhấp vào nút "Không"
let noButtonState = 0; // Trạng thái hiện tại của nút "Không"


document.getElementById('siBtn').addEventListener('click', function() {
  
    document.getElementById('question').style.display = 'none';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Hiển thị thông điệp yêu thương
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 'Anh yêu em <i class="fas fa-heart"></i>';
    

});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:

            // Sửa nút "Không"
            document.getElementById('noBtn').innerHTML = 'Em nghe thử đi nhaaa';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
            
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';
       
            
           
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Lần thứ hai nhấp vào "Không"

            document.getElementById('noBtn').innerHTML = 'Đừng có hối hận nhá';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
        

            // Làm cho nút "Có" phình to
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
        
            noButtonState++;
            break;

        case 2:
           
            document.getElementById('noBtn').innerHTML = 'Cho em suy nghĩ lại';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Làm cho nút "Có" phình to
            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
        
            noButtonState++;
            break;
        
        case 3:
           
            document.getElementById('noBtn').innerHTML = 'Thật sự không muốn nghe shao?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Làm cho nút "Có" phình to
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
        
            noButtonState++;
            break;
            case 4:
           
            document.getElementById('noBtn').innerHTML = 'Cơ hội cuối cùng đóo';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';
          
            noButtonState++;
            break;
            case 5:
                document.getElementById('noBtn').innerHTML = 'Vậy thôi em ấn đi...';
                document.getElementById('noBtn').style.backgroundColor = '#F1330A';

                // Làm cho nút "Có" phình to

                document.getElementById('siBtn').style.fontSize = '200px';
                document.getElementById('siBtn').style.padding = '100px 200px';

                // Thay đổi vị trí của nút 'noBtn' một cách ngẫu nhiên
                document.getElementById('noBtn').style.position = 'absolute';
                document.getElementById('noBtn').style.left = Math.random() * window.innerWidth + 'px';
                document.getElementById('noBtn').style.top = Math.random() * window.innerHeight + 'px';

                noButtonState++;

                // // Quay lại trạng thái 0
                // if (noButtonState > 4) {
                //     noButtonState = 0;
                // }

                // Random lại vị trí của nút 'noBtn' khi nhấp vào
                document.getElementById('noBtn').addEventListener('click', function() {
                    document.getElementById('noBtn').style.left = Math.random() * window.innerWidth + 'px';
                    document.getElementById('noBtn').style.top = Math.random() * window.innerHeight + 'px';
                });

                break;
        

        default:
            // Xử lý bất kỳ trường hợp nào khác ở đây
            break;
    }
});
