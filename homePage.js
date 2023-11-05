// 2.3.3.2
const elementListShoes = document.getElementById('list-shoes');

// const redirectDetails = (id) => {
//   window.location.href = `http://127.0.0.1:5500/Details/details.html?${id}`;
// };

// const showUI = () => {
//   axios({
//     method: 'get',
//     url: 'https://shop.cyberlearn.vn/api/Product',
//   })
//     .then((response) => {
//       const data = response.data.content;
//       let str = '';
//       data.map((item, index) => {
//         str += `
//         <div class="product w-[310px] mt-10">
//           <div class="product-img">
//             <img src="${item.image}" alt="" />
//           </div>
//           <div class="product-content mt-[20px] pl-[25px]">
//             <h4>${item.name}</h4>
//             <p>${item.shortDescription}</p>
//           </div>
//           <div class="product-price flex">
//             <button onclick="redirectDetails(${item.id})" >Buy now</button>
//             <div class="price"><p>${item.price}$</p></div>
//           </div>
//         </div>
//         `;
//       });

//       elementListShoes.innerHTML = str;
//     })
//     .catch((error) => console.log('error : ', error));
// };

// // 2.3.3.3
// showUI();

//2.1

const redirectDetails = (id) => {
  window.location.href = `http://127.0.0.1:5500/Details/details.html?${id}`;
};

const showUI = (listData) => {
  let str = '';
  listData.map((item) => {
    console.log('item : ', item);
    str += `
      <div class="product w-[310px] mt-3">
        <div class="product-img">
          <img src=${item.image} alt=${item.name} />
        </div>
        <div class="product-content mt-[20px] pl-[25px]">
          <h4>${item.name}</h4>
          <p>${item.shortDescription}</p>
        </div>
        <div class="product-price flex">
          <button onclick="redirectDetails(${item.id})">Buy now</button>
          <div class="price"><p>${item.price}$</p></div>
        </div>
      </div>
    `;
  });

  elementListShoes.innerHTML = str;
};

callAPI();
