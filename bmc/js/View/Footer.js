
const footerTemplate = () => `<hr class="ft_hr" />
      <div class="ft_wrapper">
        <ul class="ft_guide_list">
          <li class="ft_guide_li">
            <img
              class="ft_guide_img"
              src="./js/Model/images/footer/dawn.png"
              alt=""
            />
            <span class="ft_guide_sp">새벽배송 안내</span>
          </li>
          <li class="ft_guide_li">
            <img
              class="ft_guide_img"
              src="./js/Model/images/footer/question.png"
              alt=""
            />
            <span class="ft_guide_sp">자주하는 질문</span>
          </li>
          <li class="ft_guide_li">
            <img
              class="ft_guide_img"
              src="./js/Model/images/footer/deliver.png"
              alt=""
            />
            <span class="ft_guide_sp">정기배송 안내</span>
          </li>
          <li class="ft_guide_li">
            <img
              class="ft_guide_img"
              src="./js/Model/images/footer/many.png"
              alt=""
            />
            <span class="ft_guide_sp">단체주문 안내</span>
          </li>
        </ul>
        <div class="ft_noti">
          <h5 class="ft_noti_header">공지사항</h5>
          <button class="ft_noti_btn">더보기</button>
          <ul class="ft_noti_list">
            <li class="ft_noti_list_li">
              <img
                src="./js/Model//images/footer/graySquare.png"
                alt=""
                class="ft_noti_list_img"
              />개인정보처리방침 일부 변경에 관한 안내
            </li>
            <li class="ft_noti_list_li">
              <img
                src="./js/Model//images/footer/graySquare.png"
                alt=""
                class="ft_noti_list_img"
              />[공지] 한글날 휴무로 인한 10월 8일(월)~10일(수) 배송 안내
            </li>
            <li class="ft_noti_list_li">
              <img
                src="./js/Model//images/footer/graySquare.png"
                alt=""
                class="ft_noti_list_img"
              />회원등급제도 변경 안내
            </li>
            <li class="ft_noti_list_li">
              <img
                src="./js/Model//images/footer/graySquare.png"
                alt=""
                class="ft_noti_list_img"
              />[공지] 개천절 휴무로 인한 10월 3일(수)~4일(목) 배송 안내
            </li>
          </ul>
        </div>
        <div class="ft_customer">
          <span class="ft_customer_sp">고객센터</span>
          <span class="ft_customer_sp">1899-2468</span>
          <span class="ft_customer_sp">평 일 06:30 ~ 18:00</span>
          <span class="ft_customer_sp">토요일 06:30 ~ 15:00</span>
          <span class="ft_customer_sp a7_color">일요일/공휴일 휴무</span>
          <span class="ft_customer_sp a7_color">*배송있는 공휴일은 운영</span>
        </div>
      </div>

      <div class="ft_wrapper">
        <a href=""
          ><img
            class="ft_sns_img"
            src="./js/Model/images/footer/sns_facebook.png"
            alt=""
        /></a>
        <a href=""
          ><img
            class="ft_sns_img"
            src="./js/Model/images/footer/sns_instagram.png"
            alt=""
        /></a>
        <ul class="ft_info_list">
          <li class="ft_info_list_li">회사소개</li>
          <li class="ft_info_list_li">제휴문의</li>
          <li class="ft_info_list_li">단체구매문의</li>
          <li class="ft_info_list_li">이메일 무단 수집거부</li>
          <li class="ft_info_list_li">이용약관</li>
          <li class="ft_info_list_li black_font">개인정보처리방침</li>
          <li class="ft_info_list_li">공지사항</li>
        </ul>

        <ul class="ft_sub_info_list">
          <li class="ft_sub_info_list_li">(주)우아한신선들</li>
          <li class="ft_sub_info_list_li">대표이사: 최준영</li>
          <li class="ft_sub_info_list_li">
            사업자등록번호: 111-11-11111[사업자정보확인]
          </li>
          <li class="ft_sub_info_list_li">
            통신판매업신고: 제2015-서울송파-1733호
          </li>
        </ul>
        <ul class="ft_sub_info_list">
          <li class="ft_sub_info_list_li">
            주소: 서울특별시 송파구 올림픽로 348 6층(방이동)
          </li>
          <li class="ft_sub_info_list_li">개인정보담당자: 이화연</li>
          <li class="ft_sub_info_list_li">이메일: whale@naver.com</li>
          <li class="ft_sub_info_list_li">고객센터: 1588-5588</li>
        </ul>
        <ul class="ft_sub_info_list">
          <li class="ft_sub_info_list_li">
            고객님의 안전거래를 위해 현금 등으로 결제 시 LG U+의 구매안전
            서비스를 이용하실 수 있습니다. [서비스 가입사실 확인]
          </li>
        </ul>
        <span class="ft_sub_info_sp1"
          >©Woowahan Fresh. All Rights Reserved.</span
        >
        <span class="ft_sub_info_sp2"
          >배민찬은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
          배민찬은 상품 거래정보 및 거래에 대해 책임지지 않습니다. 다만 회사가
          판매하는 직매입 상품의 경우 판매업체의 지위를 갖게 됩니다.</span
        >
      </div>`

const Footer = {
  init: node => node.innerHTML =  footerTemplate()
}

export default Footer;