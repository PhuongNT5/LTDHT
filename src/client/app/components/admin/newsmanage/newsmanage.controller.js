(function () {
  angular.module('app.newsmanage')
    .controller('newsmanageController', newsmanageController);

  function newsmanageController() {
    var vm = this;
    vm.bantin = [{
        id: 1,
        tenbantin: 'Klopp áp đảo Mourinho trước đại chiến nước Anh',
        theloai: 'The thao',
        noidung: 'Trận đấu giữa hai đội bóng giàu truyền thống nhất nước Anh là Liverpool và Man Utd sẽ mở màn vòng tám Ngoại hạng Anh sau hai tuần nghỉ ngơi. Bên cạnh cuộc chiến trên sân, màn đấu trí ngoài đường biên giữa Klopp và Mourinho cũng hứa hẹn thú vị khi cả hai được xem như những HLV hàng đầu thế giới hiện tại. /nTrước trận đấu vào ngày 14/10 tới đây, Klopp từng chạm trán Mourinho bảy lần. Trong đó, các đội bóng dưới sự dẫn dắt của chiến lược gia người Đức thắng ba, hòa ba và chỉ thua một lần.'

      },
      {
        id: 2,
        tenbantin: 'Thiên đường sắp bị cắt đứt khỏi thế giới',
        theloai: 'Du lich',
        noidung: 'Có những bãi biển đẹp của vùng Caribbean, các thành phố sôi động và thác Angel nổi tiếng thế giới, Venezuela được nhiều du khách lựa chọn là điểm đến với những kỳ nghỉ đáng mơ ước./nTuy nhiên hiện nay, đất nước từng được mệnh danh là giàu nhất khu vực Nam Mỹ này đang rơi vào suy thoái do bất ổn chính trị, đói nghèo và đồng tiền mất giá.'

      }
    ]
  }

})();
