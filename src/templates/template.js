import { html } from 'lit';
import { msg } from '../components/i18n.js';

export const template = html`
<div id="loadIndicator"><img src="${import.meta.env.VITE_BASE_URL}/assets/images/loading.gif" alt="loading..."/><span>&nbsp;</span></div>
<div id="container-wrap">
<div id="container">
<ul class="pages" id="slider">
  <li class="page" data-name="1">
    <div class="page-scale-wrap mq-1440 mq-default" role="region" data-layout-name="Desktop" data-ani-load="go({target:this},[{n:'infinite',link:1,id:4835,act:'play'}], 'pageload');" style="width:1440px;height:900px;">
      <div tabindex="-1" data-id="444" name="Bar" alt="Bar" id="item444" class="pageItem mso ">
        <div aria-hidden="false" class="pageItem state active" name="Bar 0%" data-ani-load="go({target:this},[{n:'infinite',link:1,id:4878,act:'play'}], 'stateload');">
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Main-stage1-Desktop.webp" alt="Rectangle" style="left:10px !important;top:10px !important;" id="item4778" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4853.png" data-ani="grow-4878 1s linear infinite" data-id="4878" id="item4878" data-hideend="1" alt="Polygon" style="left:1044px !important;top:114px !important;" class="pageItem "/>
          <div id="item3125" class="pageItem singleline">
            <p class="autoParaStyle2">%</p>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_596.png" alt="Polygon" style="left:401px !important;top:161px !important;" id="item3148" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_1939.png" alt="Polygon" style="left:413px !important;top:150px !important;" id="item3149" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_3150.png" alt="Polygon" style="left:402px !important;top:177px !important;" id="item3150" class="pageItem "/>
          <div alt="Scalable Operations,Noise Management,Energy Efficienc" style="left:473px !important;top:112px !important;" id="item3151" class="pageItem group ">
            <div id="item3152" class="pageItem">
              <p class="autoParaStyle3">${msg('Energy')}<br/></p>
              <p class="autoParaStyle3">${msg('Efficiency')}</p>
            </div>
            <div id="item3175" class="pageItem">
              <p class="autoParaStyle3">${msg('Noise')}</p>
              <p class="autoParaStyle3">${msg('Management')}</p>
            </div>
            <div id="item3198" class="pageItem">
              <p class="autoParaStyle3">${msg('Scalable')}<br />${msg('Operations')}</p>
            </div>
          </div>
          <div id="item3222" class="pageItem singleline">
            <p class="autoParaStyle19">0</p>
          </div>
          <button data-id="4838" name="Start- EnergyEfficency" data-click-state="444:1" aria-label="Start- EnergyEfficency" id="item4838" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Start-EnergyEfficiency'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4853.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item4837" class="pageItem "/>
            </div>
          </button>
        </div>
        <div aria-hidden="true" class="pageItem state" name="Bar 33%" data-ani-load="go({target:this},[{n:1,link:1,id:1313,act:'play'},{n:'infinite',link:1,id:4879,sn:1,act:'play'},{del:1.25,n:1,link:1,id:446,act:'play'},{n:1,link:1,id:11404,act:'play'},{n:1,id:11427,sn:1,act:'play'},{n:1,link:1,id:11450,act:'play'},{n:1,id:11520,sn:1,act:'play'},{n:1,link:1,id:11473,act:'play'},{n:1,id:11524,sn:1,act:'play'},{n:1,link:1,id:11497,act:'play'},{n:1,id:11527,sn:1,act:'play'}], 'stateload');">
          <div id="item4620" class="pageItem" alt="Movie" style="left:10px !important;top:10px !important;">
            <video width="1440" height="900" data-id="4620" data-autoplay="1" data-autodelay="0" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" class="mejs-none">
              <source src="${import.meta.env.VITE_BASE_URL}/assets/media/Main-stage1B_V2.mp4" type="video/mp4"/>
            </video>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4853.png" data-ani="grow-4879 1s linear infinite" data-id="4879" id="item4879" data-hideend="1" alt="Polygon" style="left:1044px !important;top:114px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Bar-33.gif" alt="Rectangle" style="left:382px !important;top:143px !important;" id="item1358" class="pageItem "/>
          <div id="item446" class="pageItem singleline hidden" data-ani="fadein-446 0.5s linear 1" data-id="446" data-hidestart="1">
            <p class="autoParaStyle1">${msg('DATA  01')}</p>
          </div>
          <div id="item493" class="pageItem singleline">
            <p class="autoParaStyle2">%</p>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_596.png" alt="Polygon" style="left:401px !important;top:161px !important;" id="item517" class="pageItem "/>
          <div data-ani="moveright-1313 1s linear 1" data-id="1313" id="item1313" alt="Group" style="left:402px !important;top:151px !important;width: 20px !important;height:36px !important;" class="pageItem group ">
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_1939.png" alt="Polygon" style="left:11px !important;" id="item1314" class="pageItem "/>
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_3150.png" alt="Polygon" style="top:27px !important;" id="item1315" class="pageItem "/>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/33.gif" alt="Rectangle" style="width:50px !important;height:40px !important;left:988px !important;top:178px !important;" id="item1945" class="pageItem "/>
          <div alt="Scalable Operations,Noise Management,Energy Efficienc" style="left:473px !important;top:112px !important;" id="item2080" class="pageItem group ">
            <div id="item2081" class="pageItem">
              <p class="autoParaStyle3">${msg('Energy')}</p>
              <p class="autoParaStyle3">${msg('Efficiency')}</p>
            </div>
            <div id="item2104" class="pageItem">
              <p class="autoParaStyle3">${msg('Noise')}</p>
              <p class="autoParaStyle3">${msg('Management')}</p>
            </div>
            <div id="item2127" class="pageItem">
              <p class="autoParaStyle3">${msg('Scalable')}<br />${msg('Operations')}</p>
            </div>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4276.png" alt="Rectangle" style="left:835px !important;top:776px !important;" id="item4276" class="pageItem "/>
          <button data-id="4842" name="Next- NoiseManagement" data-click-state="444:3" aria-label="Next- NoiseManagement" id="item4842" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Next-NoiseManagement'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4853.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item4841" class="pageItem "/>
            </div>
          </button>
          <div alt="Balance power use to extend endurance and operational efficiency,Simulate and refine battery life, thermal behavior a..." style="left:831px !important;top:279px !important;" id="item11403" class="pageItem group ">
            <div id="item11404" class="pageItem hidden" data-ani="flyinfrombottom-11404 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11404" data-hidestart="1">
              <p class="autoParaStyle18">${msg('Energy')}</p>
              <p class="autoParaStyle17">${msg('Efficiency')}</p>
            </div>
            <div id="item11427" class="pageItem hidden" data-ani="flyinfrombottom-11427 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11427" data-hidestart="1">
              <p class="autoParaStyle6">${msg('Maximizing range requires solving the energy efficiency equation.')}</p>
              <p class="autoParaStyle6"><br /></p>
              <p class="autoParaStyle6">${msg('Unlock peak performance with integrated generative design and simulation')}:</p>
            </div>
            <div id="item11450" class="pageItem singleline hidden" data-ani="flyinfrombottom-11450 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11450" data-hidestart="1">
              <p class="autoParaStyle11">${msg('Engineer lightweight, high-performance components')}</p>
            </div>
            <div id="item11473" class="pageItem hidden" data-ani="flyinfrombottom-11473 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11473" data-hidestart="1">
              <p class="autoParaStyle8">${msg('Simulate and refine battery life, thermal behavior and')}</p>
              <p class="autoParaStyle8">${msg('charge cycles')}</p>
            </div>
            <div id="item11497" class="pageItem hidden" data-ani="flyinfrombottom-11497 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11497" data-hidestart="1">
              <p class="autoParaStyle11"><span class="autoCharStyle1">${msg('Balance power use to extend endurance and operational efficiency')}
            </div>
            <div data-ani="appear-11520 0.5s linear 1" data-id="11520" id="item11520" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:301px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item11521" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item11523" class="pageItem "/>
            </div>
            <div data-ani="appear-11524 0.5s linear 1" data-id="11524" id="item11524" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:346px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item11525" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item11526" class="pageItem "/>
            </div>
            <div data-ani="appear-11527 0.5s linear 1" data-id="11527" id="item11527" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:413px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item11528" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item11529" class="pageItem "/>
            </div>
          </div>
        </div>
        <div aria-hidden="true" class="pageItem state" name="Bar 66% Back 33%" data-ani-load="go({target:this},[{n:'infinite',link:1,id:4880,act:'play'},{n:1,link:1,id:1830,act:'play'},{n:1,link:1,id:1712,act:'play'},{n:1,link:1,id:11541,act:'play'},{n:1,id:11564,sn:1,act:'play'},{n:1,link:1,id:11587,act:'play'},{n:1,id:11656,sn:1,act:'play'},{n:1,link:1,id:11610,act:'play'},{n:1,id:11660,sn:1,act:'play'},{n:1,link:1,id:11633,act:'play'},{n:1,id:11663,sn:1,act:'play'}], 'stateload');">
          <div id="item4698" class="pageItem" alt="Movie" style="left:10px !important;top:10px !important;">
            <video width="1440" height="900" data-id="4698" data-autoplay="1" data-autodelay="0" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" class="mejs-none">
              <source src="${import.meta.env.VITE_BASE_URL}/assets/media/Main-stage2B-reverse_V2 REV.mp4" type="video/mp4"/>
            </video>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4853.png" data-ani="grow-4880 1s linear infinite" data-id="4880" id="item4880" data-hideend="1" alt="Polygon" style="left:1044px !important;top:114px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Bar-Back%2033.gif" alt="Rectangle" style="left:382px !important;top:143px !important;" id="item1709" class="pageItem "/>
          <div id="item1712" class="pageItem singleline hidden" data-ani="fadein-1712 0.5s linear 1" data-id="1712" data-hidestart="1">
            <p class="autoParaStyle1">${msg('DATA  01')}</p>
          </div>
          <div id="item1735" class="pageItem singleline">
            <p class="autoParaStyle2">%</p>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_596.png" alt="Polygon" style="left:401px !important;top:161px !important;" id="item1759" class="pageItem "/>
          <div data-ani="moveright-1830 1s linear 1" data-id="1830" id="item1830" alt="Group" style="left:877px !important;top:152px !important;width: 20px !important;height:36px !important;" class="pageItem group ">
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_1939.png" alt="Polygon" style="left:11px !important;" id="item1831" class="pageItem "/>
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_3150.png" alt="Polygon" style="top:27px !important;" id="item1832" class="pageItem "/>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Back%2033.gif" alt="Rectangle" style="width:50px !important;height:40px !important;left:988px !important;top:178px !important;" id="item2039" class="pageItem "/>
          <div alt="Scalable Operations,Noise Management,Energy Efficienc" style="left:473px !important;top:112px !important;" id="item2154" class="pageItem group ">
            <div id="item2155" class="pageItem">
              <p class="autoParaStyle3">${msg('Energy')}</p>
              <p class="autoParaStyle3">${msg('Efficiency')}</p>
            </div>
            <div id="item2178" class="pageItem">
              <p class="autoParaStyle3">${msg('Noise')}</p>
              <p class="autoParaStyle3">${msg('Management')}</p>
            </div>
            <div id="item2201" class="pageItem">
              <p class="autoParaStyle3">${msg('Scalable')}<br />${msg('Operations')}</p>
            </div>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4276.png" alt="Rectangle" style="left:835px !important;top:776px !important;" id="item4282" class="pageItem "/>
          <button data-id="4846" name="Next-NoiseManagement (R)" data-click-state="444:3" aria-label="Next-NoiseManagement (R)" id="item4846" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Next-NoiseManagement (R)'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4853.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item4845" class="pageItem "/>
            </div>
          </button>
          <div alt="Balance power use to extend endurance and operational efficiency,Simulate and refine battery life, thermal behavior a..." style="left:831px !important;top:279px !important;" id="item11540" class="pageItem group ">
            <div id="item11541" class="pageItem hidden" data-ani="flyinfrombottom-11541 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11541" data-hidestart="1">
              <p class="autoParaStyle16">${msg('Energy')}</p>
              <p class="autoParaStyle15">${msg('Efficiency')}</p>
            </div>
            <div id="item11564" class="pageItem hidden" data-ani="flyinfrombottom-11564 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11564" data-hidestart="1">
              <p class="autoParaStyle6">${msg('Maximizing range requires solving the energy efficiency equation.')}</p>
              <p class="autoParaStyle6"><br /></p>
              <p class="autoParaStyle6">${msg('Unlock peak performance with integrated generative design and simulation')}:</p>
            </div>
            <div id="item11587" class="pageItem singleline hidden" data-ani="flyinfrombottom-11587 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11587" data-hidestart="1">
              <p class="autoParaStyle11">${msg('Engineer lightweight, high-performance components')}</p>
            </div>
            <div id="item11610" class="pageItem hidden" data-ani="flyinfrombottom-11610 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11610" data-hidestart="1">
              <p class="autoParaStyle11">${msg('Simulate and refine battery life, thermal behavior and')}</p>
              <p class="autoParaStyle11">${msg('charge cycles')}</p>
            </div>
            <div id="item11633" class="pageItem hidden" data-ani="flyinfrombottom-11633 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11633" data-hidestart="1">
              <p class="autoParaStyle11"><span class="autoCharStyle1">${msg('Balance power use to extend endurance and operational efficiency')}</span></p>
            </div>
            <div data-ani="appear-11656 0.5s linear 1" data-id="11656" id="item11656" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:301px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item11657" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item11659" class="pageItem "/>
            </div>
            <div data-ani="appear-11660 0.5s linear 1" data-id="11660" id="item11660" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:346px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item11661" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item11662" class="pageItem "/>
            </div>
            <div data-ani="appear-11663 0.5s linear 1" data-id="11663" id="item11663" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:413px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item11664" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item11665" class="pageItem "/>
            </div>
          </div>
        </div>
        <div aria-hidden="true" class="pageItem state" name="Bar 66%" data-ani-load="go({target:this},[{n:'infinite',link:1,id:4881,act:'play'},{n:'infinite',link:1,id:4882,act:'play'},{n:1,id:1342,sn:1,act:'play'},{n:1,link:1,id:11956,act:'play'},{n:1,link:1,id:10917,act:'play'},{n:1,id:10940,sn:1,act:'play'},{n:1,link:1,id:10963,act:'play'},{n:1,id:11033,sn:1,act:'play'},{n:1,link:1,id:10986,act:'play'},{n:1,id:11037,sn:1,act:'play'},{n:1,link:1,id:11010,act:'play'},{n:1,id:11041,sn:1,act:'play'}], 'stateload');">
          <div id="item4720" class="pageItem" alt="Movie" style="left:10px !important;top:10px !important;">
            <video width="1440" height="900" data-id="4720" data-autoplay="1" data-autodelay="0" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" class="mejs-none">
              <source src="${import.meta.env.VITE_BASE_URL}/assets/media/Main-stage2B_V2 REV.mp4" type="video/mp4"/>
            </video>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4885.png" data-ani="grow-4882 1s linear infinite" data-id="4882" id="item4882" data-hideend="1" alt="Polygon" style="left:395px !important;top:114px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4853.png" data-ani="grow-4881 1s linear infinite" data-id="4881" id="item4881" data-hideend="1" alt="Polygon" style="left:1044px !important;top:114px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Bar-66.gif" alt="Rectangle" style="left:382px !important;top:143px !important;" id="item1333" class="pageItem "/>
          <div id="item573" class="pageItem singleline">
            <p class="autoParaStyle2">%</p>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_596.png" alt="Polygon" style="left:401px !important;top:161px !important;" id="item596" class="pageItem "/>
          <div data-ani="moveright-1342 1s linear 1" data-id="1342" id="item1342" alt="Group" style="left:587px !important;top:151px !important;width: 20px !important;height:36px !important;" class="pageItem group ">
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_1939.png" alt="Polygon" style="left:11px !important;" id="item1343" class="pageItem "/>
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_3150.png" alt="Polygon" style="top:27px !important;" id="item1344" class="pageItem "/>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/66.gif" alt="Rectangle" style="width:50px !important;height:40px !important;left:988px !important;top:178px !important;" id="item2021" class="pageItem "/>
          <div alt="Scalable Operations,Noise Management,Energy Efficienc" style="left:473px !important;top:112px !important;" id="item2225" class="pageItem group ">
            <div id="item2226" class="pageItem">
              <p class="autoParaStyle3">${msg('Energy')}</p>
              <p class="autoParaStyle3">${msg('Efficiency')}</p>
            </div>
            <div id="item2249" class="pageItem">
              <p class="autoParaStyle3">${msg('Noise')}</p>
              <p class="autoParaStyle3">${msg('Management')}</p>
            </div>
            <div id="item2273" class="pageItem">
              <p class="autoParaStyle3">${msg('Scalable')}<br />${msg('Operations')}</p>
            </div>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4276.png" alt="Rectangle" style="left:835px !important;top:776px !important;" id="item4285" class="pageItem "/>
          <button data-id="4857" name="Next-ScalebleOperations" data-click-state="444:5" aria-label="Next-ScalebleOperations" id="item4857" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Next-ScalebleOperations'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4853.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item4853" class="pageItem "/>
            </div>
          </button>
          <button data-id="4855" name="Previous- EnergyEfficiency" data-click-state="444:2" aria-label="Previous- EnergyEfficiency" id="item4855" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Previous-EnergyEfficiency'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4885.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item4854" class="pageItem "/>
            </div>
          </button>
          <div alt="Simulate optimal flight paths to minimize noise impact,Map noise propagation patterns to pinpoint problem areas,Virtu..." style="left:831px !important;top:279px !important;" id="item10916" class="pageItem group ">
            <div id="item10917" class="pageItem hidden" data-ani="flyinfrombottom-10917 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="10917" data-hidestart="1">
              <p class="autoParaStyle14">Noise</p>
              <p class="autoParaStyle13">Management</p>
            </div>
            <div id="item10940" class="pageItem hidden" data-ani="flyinfrombottom-10940 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="10940" data-hidestart="1">
              <p class="autoParaStyle6">${msg('Mastering aerodynamics and propulsion acoustics is the secret to a quieter aircraft.')}</p>
              <p class="autoParaStyle6"><br /></p>
              <p class="autoParaStyle6">${msg('Break the noise barrier with unified modeling and simulation (MODSIM)')}:</p>
            </div>
            <div id="item10963" class="pageItem singleline hidden" data-ani="flyinfrombottom-10963 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="10963" data-hidestart="1">
              <p class="autoParaStyle7">${msg('Virtually generate and analyze propeller noise signatures')}</p>
            </div>
            <div id="item10986" class="pageItem hidden" data-ani="flyinfrombottom-10986 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="10986" data-hidestart="1">
              <p class="autoParaStyle11"><span class="autoCharStyle1">${msg('Map noise propagation patterns to pinpoint problem areas')}</span></p>
            </div>
            <div id="item11010" class="pageItem singleline hidden" data-ani="flyinfrombottom-11010 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11010" data-hidestart="1">
              <p class="autoParaStyle12">${msg('Simulate optimal flight paths to minimize noise impact')}</p>
            </div>
            <div data-ani="appear-11033 0.5s linear 1" data-id="11033" id="item11033" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:301px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item11034" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item11036" class="pageItem "/>
            </div>
            <div data-ani="appear-11037 0.5s linear 1" data-id="11037" id="item11037" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:346px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item11039" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item11040" class="pageItem "/>
            </div>
            <div data-ani="appear-11041 0.5s linear 1" data-id="11041" id="item11041" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:413px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item11042" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item11043" class="pageItem "/>
            </div>
          </div>
          <div id="item11956" class="pageItem singleline hidden" data-ani="fadein-11956 0.5s linear 1" data-id="11956" data-hidestart="1">
            <p class="autoParaStyle1">${msg('DATA  02')}</p>
          </div>
        </div>
        <div aria-hidden="true" class="pageItem state" name="Bar 100% Back 66%" data-ani-load="go({target:this},[{n:'infinite',link:1,id:4883,act:'play'},{n:'infinite',link:1,id:4884,act:'play'},{n:1,id:1938,sn:1,act:'play'},{n:1,link:1,id:1581,act:'play'},{n:1,link:1,id:11827,act:'play'},{n:1,id:11850,sn:1,act:'play'},{n:1,link:1,id:11874,act:'play'},{n:1,id:11943,sn:1,act:'play'},{n:1,link:1,id:11897,act:'play'},{n:1,id:11948,sn:1,act:'play'},{n:1,link:1,id:11920,act:'play'},{n:1,id:11952,sn:1,act:'play'}], 'stateload');">
          <div id="item4739" class="pageItem" alt="Movie" style="left:10px !important;top:10px !important;">
            <video width="1440" height="900" data-id="4739" data-autoplay="1" data-autodelay="0" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" class="mejs-none">
              <source src="${import.meta.env.VITE_BASE_URL}/assets/media/Main-stage3B-reverse_V2.mp4" type="video/mp4"/>
            </video>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4885.png" data-ani="grow-4884 1s linear infinite" data-id="4884" id="item4884" data-hideend="1" alt="Polygon" style="left:395px !important;top:114px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4853.png" data-ani="grow-4883 1s linear infinite" data-id="4883" id="item4883" data-hideend="1" alt="Polygon" style="left:1044px !important;top:114px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Bar-back%2066.gif" alt="Rectangle" style="left:382px !important;top:143px !important;" id="item1578" class="pageItem "/>
          <div id="item1581" class="pageItem singleline hidden" data-ani="fadein-1581 0.5s linear 1" data-id="1581" data-hidestart="1">
            <p class="autoParaStyle1">DATA  02</p>
          </div>
          <div id="item1604" class="pageItem singleline">
            <p class="autoParaStyle2">%</p>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_596.png" alt="Polygon" style="left:401px !important;top:161px !important;" id="item1627" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Back%2066.gif" alt="Rectangle" style="width:50px !important;height:40px !important;left:988px !important;top:178px !important;" id="item1700" class="pageItem "/>
          <div data-ani="moveright-1938 1s linear 1" data-id="1938" id="item1938" alt="Group" style="left:1045px !important;top:152px !important;width: 20px !important;height:36px !important;" class="pageItem group ">
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_1939.png" alt="Polygon" style="left:11px !important;" id="item1939" class="pageItem "/>
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_3150.png" alt="Polygon" style="top:27px !important;" id="item1940" class="pageItem "/>
          </div>
          <div alt="Scalable Operations,Noise Management,Energy Efficienc" style="left:473px !important;top:112px !important;" id="item2306" class="pageItem group ">
            <div id="item2307" class="pageItem">
              <p class="autoParaStyle3">${msg('Energy')}</p>
              <p class="autoParaStyle3">${msg('Efficiency')}</p>
            </div>
            <div id="item2330" class="pageItem">
              <p class="autoParaStyle3">${msg('Noise')}</p>
              <p class="autoParaStyle3">${msg('Management')}</p>
            </div>
            <div id="item2354" class="pageItem">
              <p class="autoParaStyle3">${msg('Scalable')}<br />${msg('Operations')}</p>
            </div>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4276.png" alt="Rectangle" style="left:835px !important;top:776px !important;" id="item4289" class="pageItem "/>
          <button data-id="4867" name="Next-ScalableOperation (R)" data-click-state="444:5" aria-label="Next-ScalableOperation (R)" id="item4867" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Next-ScalableOperation (R)'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4853.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item4861" class="pageItem "/>
            </div>
          </button>
          <button data-id="4865" name="Previous-EnergyEfficiency (R)" data-click-state="444:2" aria-label="Previous-EnergyEfficiency (R)" id="item4865" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Previous-EnergyEfficiency (R)'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4885.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item4862" class="pageItem "/>
            </div>
          </button>
          <div alt="Simulate optimal flight paths to minimize noise impact,Map noise propagation patterns to pinpoint problem areas,Virtu..." style="left:831px !important;top:279px !important;" id="item11826" class="pageItem group ">
            <div id="item11827" class="pageItem hidden" data-ani="flyinfrombottom-11827 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11827" data-hidestart="1">
              <p class="autoParaStyle10">${msg('Noise')}</p>
              <p class="autoParaStyle9">${msg('Management')}</p>
            </div>
            <div id="item11850" class="pageItem hidden" data-ani="flyinfrombottom-11850 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11850" data-hidestart="1">
              <p class="autoParaStyle6">${msg('Mastering aerodynamics and propulsion acoustics is the secret to a quieter aircraft.')}</p>
              <p class="autoParaStyle6"><br /></p>
              <p class="autoParaStyle6">${msg('Break the noise barrier with unified modeling and simulation (MODSIM)')}:</p>
            </div>
            <div id="item11874" class="pageItem singleline hidden" data-ani="flyinfrombottom-11874 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11874" data-hidestart="1">
              <p class="autoParaStyle7">Virtually generate and analyze propeller noise signatures</p>
            </div>
            <div id="item11897" class="pageItem hidden" data-ani="flyinfrombottom-11897 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11897" data-hidestart="1">
              <p class="autoParaStyle11"><span class="autoCharStyle1">${msg('Map noise propagation patterns to pinpoint problem areas')}</span></p>
            </div>
            <div id="item11920" class="pageItem singleline hidden" data-ani="flyinfrombottom-11920 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="11920" data-hidestart="1">
              <p class="autoParaStyle12">${msg('Simulate optimal flight paths to minimize noise impact')}</p>
            </div>
            <div data-ani="appear-11943 0.5s linear 1" data-id="11943" id="item11943" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:301px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item11945" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item11947" class="pageItem "/>
            </div>
            <div data-ani="appear-11948 0.5s linear 1" data-id="11948" id="item11948" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:346px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item11950" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item11951" class="pageItem "/>
            </div>
            <div data-ani="appear-11952 0.5s linear 1" data-id="11952" id="item11952" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:413px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item11953" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item11954" class="pageItem "/>
            </div>
          </div>
        </div>
        <div aria-hidden="true" class="pageItem state" name="Bar 100%" data-ani-load="go({target:this},[{n:'infinite',link:1,id:4885,act:'play'},{n:1,id:2055,sn:1,act:'play'},{n:1,link:1,id:794,act:'play'},{n:1,link:1,id:3643,act:'play'},{n:1,id:3666,sn:1,act:'play'},{n:1,link:1,id:3689,act:'play'},{n:1,id:3759,sn:1,act:'play'},{n:1,link:1,id:3712,act:'play'},{n:1,id:3763,sn:1,act:'play'},{n:1,link:1,id:3735,act:'play'},{n:1,id:3766,sn:1,act:'play'}], 'stateload');">
          <div id="item4757" class="pageItem" alt="Movie" style="left:10px !important;top:10px !important;">
            <video width="1440" height="900" data-id="4757" data-autoplay="1" data-autodelay="0" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" class="mejs-none">
              <source src="${import.meta.env.VITE_BASE_URL}/assets/media/Main-stage3B_V2.mp4" type="video/mp4"/>
            </video>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4885.png" data-ani="grow-4885 1s linear infinite" data-id="4885" id="item4885" data-hideend="1" alt="Polygon" style="left:394px !important;top:114px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Bar-100.gif" alt="Rectangle" style="left:382px !important;top:143px !important;" id="item875" class="pageItem "/>
          <div id="item794" class="pageItem singleline hidden" data-ani="fadein-794 0.5s linear 1" data-id="794" data-hidestart="1">
            <p class="autoParaStyle1">${msg('DATA  03')}</p>
          </div>
          <div id="item841" class="pageItem singleline">
            <p class="autoParaStyle2">%</p>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_596.png" alt="Polygon" style="left:401px !important;top:161px !important;" id="item864" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/100.gif" alt="Rectangle" style="width:50px !important;height:40px !important;left:988px !important;top:178px !important;" id="item2010" class="pageItem "/>
          <div data-ani="moveright-2055 1s linear 1" data-id="2055" id="item2055" alt="Group" style="left:876px !important;top:151px !important;width: 20px !important;height:36px !important;" class="pageItem group ">
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_1939.png" alt="Polygon" style="left:11px !important;" id="item2056" class="pageItem "/>
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_3150.png" alt="Polygon" style="top:27px !important;" id="item2057" class="pageItem "/>
          </div>
          <div alt="Scalable Operations,Noise Management,Energy Efficienc" style="left:473px !important;top:112px !important;" id="item2379" class="pageItem group ">
            <div id="item2380" class="pageItem">
              <p class="autoParaStyle3">${msg('Energy')}</p>
              <p class="autoParaStyle3">${msg('Efficiency')}</p>
            </div>
            <div id="item2403" class="pageItem">
              <p class="autoParaStyle3">${msg('Noise')}</p>
              <p class="autoParaStyle3">${msg('Management')}</p>
            </div>
            <div id="item2426" class="pageItem">
              <p class="autoParaStyle3">${msg('Scalable')}<br />${msg('Operations')}</p>
            </div>
          </div>
          <div alt="Design for scale manufacturing from the start to support production at rate,Introduce new functionalities without mig..." style="left:831px !important;top:280px !important;" id="item3642" class="pageItem group ">
            <div id="item3643" class="pageItem hidden" data-ani="flyinfrombottom-3643 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="3643" data-hidestart="1">
              <p class="autoParaStyle5">${msg('Scalable')}</p>
              <p class="autoParaStyle4">${msg('Operations')}</p>
            </div>
            <div id="item3666" class="pageItem hidden" data-ani="flyinfrombottom-3666 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="3666" data-hidestart="1">
              <p class="autoParaStyle6">${msg('A scalable foundation is key to transitioning successfully to large-scale production.')}</p>
              <p class="autoParaStyle6"><br /></p>
              <p class="autoParaStyle6">${msg('A cloud-based ecosystem provides the flexibility to scale on demand – without limits')}:</p>
            </div>
            <div id="item3689" class="pageItem singleline hidden" data-ani="flyinfrombottom-3689 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="3689" data-hidestart="1">
              <p class="autoParaStyle7">${msg('Onboard teams quickly to support growth')}</p>
            </div>
            <div id="item3712" class="pageItem hidden" data-ani="flyinfrombottom-3712 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="3712" data-hidestart="1">
              <p class="autoParaStyle8">${msg('Introduce new functionalities without migrating data between systems')}</p>
            </div>
            <div id="item3735" class="pageItem hidden" data-ani="flyinfrombottom-3735 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="3735" data-hidestart="1">
              <p class="autoParaStyle8">${msg('Design for scale manufacturing from the start to support production at rate')}</p>
            </div>
            <div data-ani="appear-3759 0.5s linear 1" data-id="3759" id="item3759" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:282px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item3760" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item3762" class="pageItem "/>
            </div>
            <div data-ani="appear-3763 0.5s linear 1" data-id="3763" id="item3763" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:331px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item3764" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item3765" class="pageItem "/>
            </div>
            <div data-ani="appear-3766 0.5s linear 1" data-id="3766" id="item3766" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:394px !important;width: 22px !important;height:22px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11953.png" alt="Polygon" style="left:4px !important;" id="item3767" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_11954.png" alt="Polygon" style="top:1px !important;" id="item3768" class="pageItem "/>
            </div>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4276.png" alt="Rectangle" style="left:835px !important;top:776px !important;" id="item4293" class="pageItem "/>
          <button data-id="4873" name="Previouse-NoiseManagement" data-click-state="444:4" aria-label="Previouse-NoiseManagement" id="item4873" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Previouse-NoiseManagement'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_4885.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item4871" class="pageItem "/>
            </div>
          </button>
        </div>
      </div>
      <div id="item275" class="pageItem singleline">
        <p class="autoParaStyle20">${msg('Click on the arrow')}</p>
      </div>
      <div id="item4892" class="pageItem singleline">
        <p class="autoParaStyle21">${msg('Explore solutions to three key challenges')}</p>
      </div>
    </div>
    <div class="page-scale-wrap mq-375" role="region" data-layout-name="Mobile" data-ani-load="go({target:this},[{n:'infinite',link:1,id:13843,act:'play'}], 'pageload');" style="width:375px;height:670px;">
      <div tabindex="-1" data-id="12305" name="Bar 1" alt="Bar 1" id="item12305" class="pageItem mso ">
        <div aria-hidden="false" class="pageItem state active" name="Bar 0%" data-ani-load="go({target:this},[{n:'infinite',link:1,id:12312,act:'play'}], 'stateload');">
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Main-stage1-Mobile.webp" alt="Rectangle" style="left:10px !important;top:10px !important;" id="item12307" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12443.png" data-ani="grow-12312 1s linear infinite" data-id="12312" id="item12312" data-hideend="1" alt="Polygon" style="left:350px !important;top:96px !important;" class="pageItem "/>
          <div id="item12313" class="pageItem singleline">
            <p class="autoParaStyle23">%</p>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12495.png" alt="Polygon" style="left:32px !important;top:122px !important;" id="item12336" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12497.png" alt="Polygon" style="left:38px !important;top:117px !important;" id="item12337" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13010.png" alt="Polygon" style="left:31px !important;top:131px !important;" id="item12338" class="pageItem "/>
          <div alt="Text" style="left:77px !important;top:88px !important;" id="item12339" class="pageItem group ">
            <div id="item12340" class="pageItem">
              <p class="autoParaStyle29">${msg('Energy')}</p>
              <p class="autoParaStyle29">${msg('Efficiency')}</p>
            </div>
            <div id="item12363" class="pageItem">
              <p class="autoParaStyle29">${msg('Noise')}</p>
              <p class="autoParaStyle29">${msg('Management')}</p>
            </div>
            <div id="item12386" class="pageItem">
              <p class="autoParaStyle29">${msg('Scalable')}<br />${msg('Operations')}</p>
            </div>
          </div>
          <div id="item12409" class="pageItem singleline">
            <p class="autoParaStyle41">0</p>
          </div>
          <button data-id="12432" name="Mobile-Start-EnergyEfficiency" data-click-state="12305:1" aria-label="Mobile-Start-EnergyEfficiency" id="item12432" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Mobile-Start-EnergyEfficiency'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12443.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item12435" class="pageItem "/>
            </div>
          </button>
        </div>
        <div aria-hidden="true" class="pageItem state" name="Bar 33%" data-ani-load="go({target:this},[{n:1,link:1,id:12496,act:'play'},{n:'infinite',link:1,id:12443,sn:1,act:'play'},{del:1.25,n:1,link:1,id:12448,act:'play'},{n:1,link:1,id:12603,act:'play'},{n:1,id:12580,sn:1,act:'play'},{n:1,link:1,id:12626,act:'play'},{n:1,id:12695,sn:1,act:'play'},{n:1,link:1,id:12649,act:'play'},{n:1,id:12699,sn:1,act:'play'},{n:1,link:1,id:12672,act:'play'},{n:1,id:12702,sn:1,act:'play'}], 'stateload');">
          <div id="item12437" class="pageItem" alt="Movie" style="left:10px !important;top:10px !important;">
            <video width="375" height="670" data-id="12437" data-autoplay="1" data-autodelay="0" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" class="mejs-none">
              <source src="${import.meta.env.VITE_BASE_URL}/assets/media/Mobile-Main-stage 1_B.mp4" type="video/mp4"/>
            </video>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12443.png" data-ani="grow-12443 1s linear infinite" data-id="12443" id="item12443" data-hideend="1" alt="Polygon" style="left:350px !important;top:96px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Bar-33.gif" alt="Rectangle" style="width:350px !important;height:25px !important;left:22px !important;top:113px !important;" id="item12444" class="pageItem "/>
          <div id="item12448" class="pageItem singleline hidden" data-ani="fadein-12448 0.5s linear 1" data-id="12448" data-hidestart="1">
            <p class="autoParaStyle22">DATA  01</p>
          </div>
          <div id="item12471" class="pageItem singleline">
            <p class="autoParaStyle23">%</p>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12495.png" alt="Polygon" style="left:32px !important;top:122px !important;" id="item12495" class="pageItem "/>
          <div data-ani="moveright-12496 1s linear 1" data-id="12496" id="item12496" alt="Group" style="left:33px !important;top:118px !important;width: 10px !important;height:18px !important;" class="pageItem group ">
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12497.png" alt="Polygon" style="left:6px !important;" id="item12497" class="pageItem "/>
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13010.png" alt="Polygon" style="top:14px !important;" id="item12498" class="pageItem "/>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/33.gif" alt="Rectangle" style="width:25px !important;height:20px !important;left:325px !important;top:136px !important;" id="item12499" class="pageItem "/>
          <button data-id="12575" name="Mobile-Next- NoiseManagement" data-click-state="12305:3" aria-label="Mobile-Next- NoiseManagement" id="item12575" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Mobile-Next-NoiseManagement'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12443.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item12578" class="pageItem "/>
            </div>
          </button>
          <div alt="Text" style="left:43px !important;top:191px !important;" id="item12579" class="pageItem group ">
            <div id="item12580" class="pageItem singleline hidden" data-ani="flyinfrombottom-12580 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="12580" data-hidestart="1">
              <p class="autoParaStyle39"><span class="autoCharStyle2">${msg('Energy')}</span> ${msg('Efficiency')}</p>
            </div>
            <div id="item12603" class="pageItem hidden" data-ani="flyinfrombottom-12603 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="12603" data-hidestart="1">
              <p class="autoParaStyle40">${msg('Maximizing range requires solving the energy efficiency equation.')}</p>
              <p class="autoParaStyle40">${msg('Unlock peak performance with integrated generative design and simulation')}:</p>
            </div>
            <div id="item12626" class="pageItem singleline hidden" data-ani="flyinfrombottom-12626 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="12626" data-hidestart="1">
              <p class="autoParaStyle32">${msg('Engineer lightweight, high-performance components')}</p>
            </div>
            <div id="item12649" class="pageItem singleline hidden" data-ani="flyinfrombottom-12649 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="12649" data-hidestart="1">
              <p class="autoParaStyle28">${msg('Simulate and refine battery life, thermal behavior and charge cycles')}</p>
            </div>
            <div id="item12672" class="pageItem singleline hidden" data-ani="flyinfrombottom-12672 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="12672" data-hidestart="1">
              <p class="autoParaStyle28">${msg('Balance power use to extend endurance and operational efficiency')}</p>
            </div>
            <div data-ani="appear-12695 0.5s linear 1" data-id="12695" id="item12695" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:72px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item12697" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item12698" class="pageItem "/>
            </div>
            <div data-ani="appear-12699 0.5s linear 1" data-id="12699" id="item12699" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:92px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item12700" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item12701" class="pageItem "/>
            </div>
            <div data-ani="appear-12702 0.5s linear 1" data-id="12702" id="item12702" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:112px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item12703" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item12704" class="pageItem "/>
            </div>
          </div>
          <div alt="Text" style="left:77px !important;top:88px !important;" id="item14266" class="pageItem group ">
            <div id="item14267" class="pageItem">
              <p class="autoParaStyle29">${msg('Energy')}</p>
              <p class="autoParaStyle29">${msg('Efficiency')}</p>
            </div>
            <div id="item14290" class="pageItem">
              <p class="autoParaStyle29">${msg('Noise')}</p>
              <p class="autoParaStyle29">${msg('Management')}</p>
            </div>
            <div id="item14313" class="pageItem">
              <p class="autoParaStyle29">${msg('Scalable')}<br />${msg('Operations')}</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" class="pageItem state" name="Bar 66% Back 33%" data-ani-load="go({target:this},[{n:1,link:1,id:12761,act:'play'},{n:'infinite',link:1,id:12709,sn:1,act:'play'},{n:1,link:1,id:12714,act:'play'},{n:1,link:1,id:14658,act:'play'},{n:1,id:14682,sn:1,act:'play'},{n:1,link:1,id:14705,act:'play'},{n:1,id:14774,sn:1,act:'play'},{n:1,link:1,id:14728,act:'play'},{n:1,id:14778,sn:1,act:'play'},{n:1,link:1,id:14751,act:'play'},{n:1,id:14781,sn:1,act:'play'}], 'stateload');">
          <div id="item12706" class="pageItem" alt="Movie" style="left:10px !important;top:10px !important;">
            <video width="375" height="670" data-id="12706" data-autoplay="1" data-autodelay="0" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" class="mejs-none">
              <source src="${import.meta.env.VITE_BASE_URL}/assets/media/Mobile-Main-stage 2-reverse.mp4" type="video/mp4"/>
            </video>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12443.png" data-ani="grow-12709 1s linear infinite" data-id="12709" id="item12709" data-hideend="1" alt="Polygon" style="left:350px !important;top:96px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Bar-Back%2033.gif" alt="Rectangle" style="width:350px !important;height:25px !important;left:22px !important;top:113px !important;" id="item12710" class="pageItem "/>
          <div id="item12714" class="pageItem singleline hidden" data-ani="fadein-12714 0.5s linear 1" data-id="12714" data-hidestart="1">
            <p class="autoParaStyle22">${msg('DATA  01')}</p>
          </div>
          <div id="item12737" class="pageItem singleline">
            <p class="autoParaStyle23">%</p>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12495.png" alt="Polygon" style="left:32px !important;top:122px !important;" id="item12760" class="pageItem "/>
          <div data-ani="moveright-12761 1s linear 1" data-id="12761" id="item12761" alt="Group" style="left:270px !important;top:118px !important;width: 10px !important;height:18px !important;" class="pageItem group ">
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12497.png" alt="Polygon" style="left:6px !important;" id="item12762" class="pageItem "/>
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13010.png" alt="Polygon" style="top:14px !important;" id="item12763" class="pageItem "/>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Back%2033.gif" alt="Rectangle" style="width:25px !important;height:20px !important;left:325px !important;top:136px !important;" id="item12764" class="pageItem "/>
          <button data-id="12844" name="Mobile-Next-NoiseManagement (R)" data-click-state="12305:3" aria-label="Mobile-Next-NoiseManagement (R)" id="item12844" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Mobile-Next-NoiseManagement (R)'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12443.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item12848" class="pageItem "/>
            </div>
          </button>
          <div alt="Text" style="left:77px !important;top:88px !important;" id="item14564" class="pageItem group ">
            <div id="item14565" class="pageItem">
              <p class="autoParaStyle29">${msg('Energy')}</p>
              <p class="autoParaStyle29">${msg('Efficiency')}</p>
            </div>
            <div id="item14588" class="pageItem">
              <p class="autoParaStyle29">${msg('Noise')}</p>
              <p class="autoParaStyle29">${msg('Management')}</p>
            </div>
            <div id="item14611" class="pageItem">
              <p class="autoParaStyle29">${msg('Scalable')}<br />${msg('Operations')}</p>
            </div>
          </div>
          <div alt="Text" style="left:43px !important;top:191px !important;" id="item14657" class="pageItem group ">
            <div id="item14658" class="pageItem singleline hidden" data-ani="flyinfrombottom-14658 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="14658" data-hidestart="1">
              <p class="autoParaStyle35"><span class="autoCharStyle2">${msg('Energy')}</span> ${msg('Efficiency')}</p>
            </div>
            <div id="item14682" class="pageItem hidden" data-ani="flyinfrombottom-14682 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="14682" data-hidestart="1">
              <p class="autoParaStyle36">${msg('Maximizing range requires solving the energy efficiency equation. Unlock peak performance with integrated generative design and simulation')}:</p>
            </div>
            <div id="item14705" class="pageItem singleline hidden" data-ani="flyinfrombottom-14705 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="14705" data-hidestart="1">
              <p class="autoParaStyle32">${msg('Engineer lightweight, high-performance components')}</p>
            </div>
            <div id="item14728" class="pageItem singleline hidden" data-ani="flyinfrombottom-14728 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="14728" data-hidestart="1">
              <p class="autoParaStyle37">${msg('Simulate and refine battery life, thermal behavior and charge cycles')}</p>
            </div>
            <div id="item14751" class="pageItem singleline hidden" data-ani="flyinfrombottom-14751 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="14751" data-hidestart="1">
              <p class="autoParaStyle38"><span class="autoCharStyle1">${msg('Balance power use to extend endurance and operational efficiency')}</span></p>
            </div>
            <div data-ani="appear-14774 0.5s linear 1" data-id="14774" id="item14774" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:72px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item14775" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item14777" class="pageItem "/>
            </div>
            <div data-ani="appear-14778 0.5s linear 1" data-id="14778" id="item14778" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:92px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item14779" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item14780" class="pageItem "/>
            </div>
            <div data-ani="appear-14781 0.5s linear 1" data-id="14781" id="item14781" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:113px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item14782" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item14783" class="pageItem "/>
            </div>
          </div>
        </div>
        <div aria-hidden="true" class="pageItem state" name="Bar 66%" data-ani-load="go({target:this},[{n:1,link:1,id:13008,act:'play'},{n:'infinite',link:1,id:12979,act:'play'},{n:'infinite',link:1,id:12978,sn:1,act:'play'},{n:1,link:1,id:13226,act:'play'},{n:1,link:1,id:13101,act:'play'},{n:1,id:13124,sn:1,act:'play'},{n:1,link:1,id:13147,act:'play'},{n:1,id:13217,sn:1,act:'play'},{n:1,link:1,id:13171,act:'play'},{n:1,id:13220,sn:1,act:'play'},{n:1,link:1,id:13194,act:'play'},{n:1,id:13223,sn:1,act:'play'}], 'stateload');">
          <div id="item12975" class="pageItem" alt="Movie" style="left:10px !important;top:10px !important;">
            <video width="375" height="670" data-id="12975" data-autoplay="1" data-autodelay="0" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" class="mejs-none">
              <source src="${import.meta.env.VITE_BASE_URL}/assets/media/Mobile-Main-stage 2.mp4" type="video/mp4"/>
            </video>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13099.png" data-ani="grow-12978 1s linear infinite" data-id="12978" id="item12978" data-hideend="1" alt="Polygon" style="left:28px !important;top:96px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12443.png" data-ani="grow-12979 1s linear infinite" data-id="12979" id="item12979" data-hideend="1" alt="Polygon" style="left:350px !important;top:96px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Bar-66.gif" alt="Rectangle" style="width:350px !important;height:25px !important;left:22px !important;top:113px !important;" id="item12980" class="pageItem "/>
          <div id="item12984" class="pageItem singleline">
            <p class="autoParaStyle23">%</p>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12495.png" alt="Polygon" style="left:32px !important;top:122px !important;" id="item13007" class="pageItem "/>
          <div data-ani="moveright-13008 1s linear 1" data-id="13008" id="item13008" alt="Group" style="left:125px !important;top:118px !important;width: 10px !important;height:18px !important;" class="pageItem group ">
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12497.png" alt="Polygon" style="left:6px !important;" id="item13009" class="pageItem "/>
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13010.png" alt="Polygon" style="top:14px !important;" id="item13010" class="pageItem "/>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/66.gif" alt="Rectangle" style="width:25px !important;height:20px !important;left:325px !important;top:136px !important;" id="item13011" class="pageItem "/>
          <button data-id="13092" name="Mobile-Next-ScalableOperations" data-click-state="12305:5" aria-label="Mobile-Next-ScalableOperations" id="item13092" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Mobile-Next-ScalableOperations'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12443.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item13095" class="pageItem "/>
            </div>
          </button>
          <button data-id="13096" name="Mobile-Previous- EnergyEfficiency" data-click-state="12305:2" aria-label="Mobile-Previous- EnergyEfficiency" id="item13096" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Mobile-Previous-EnergyEfficiency'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13099.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item13099" class="pageItem "/>
            </div>
          </button>
          <div alt="Simulate optimal flight paths to minimize noise impact,Map noise propagation patterns to pinpoint problem areas,Virtu..." style="left:44px !important;top:191px !important;" id="item13100" class="pageItem group ">
            <div id="item13101" class="pageItem singleline hidden" data-ani="flyinfrombottom-13101 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="13101" data-hidestart="1">
              <p class="autoParaStyle34"><span class="autoCharStyle2">${msg('Noise')}</span> ${msg('Management')}</p>
            </div>
            <div id="item13124" class="pageItem hidden" data-ani="flyinfrombottom-13124 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="13124" data-hidestart="1">
              <p class="autoParaStyle31">${msg('Mastering aerodynamics and propulsion acoustics is the secret to a quieter aircraft. Break the noise barrier with unified modeling and simulation (MODSIM)')}:</p>
            </div>
            <div id="item13147" class="pageItem singleline hidden" data-ani="flyinfrombottom-13147 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="13147" data-hidestart="1">
              <p class="autoParaStyle26">Virtually generate and analyze propeller noise signatures</p>
            </div>
            <div id="item13171" class="pageItem singleline hidden" data-ani="flyinfrombottom-13171 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="13171" data-hidestart="1">
              <p class="autoParaStyle32"><span class="autoCharStyle1">${msg('Map noise propagation patterns to pinpoint problem areas')}</span></p>
            </div>
            <div id="item13194" class="pageItem singleline hidden" data-ani="flyinfrombottom-13194 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="13194" data-hidestart="1">
              <p class="autoParaStyle33">${msg('Simulate optimal flight paths to minimize noise impact')}</p>
            </div>
            <div data-ani="appear-13217 0.5s linear 1" data-id="13217" id="item13217" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:72px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item13218" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item13219" class="pageItem "/>
            </div>
            <div data-ani="appear-13220 0.5s linear 1" data-id="13220" id="item13220" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:92px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item13221" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item13222" class="pageItem "/>
            </div>
            <div data-ani="appear-13223 0.5s linear 1" data-id="13223" id="item13223" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:112px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item13224" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item13225" class="pageItem "/>
            </div>
          </div>
          <div id="item13226" class="pageItem singleline hidden" data-ani="fadein-13226 0.5s linear 1" data-id="13226" data-hidestart="1">
            <p class="autoParaStyle22">${msg('DATA  02')}</p>
          </div>
          <div alt="Text" style="left:77px !important;top:88px !important;" id="item14800" class="pageItem group ">
            <div id="item14801" class="pageItem">
              <p class="autoParaStyle29">${msg('Energy')}</p>
              <p class="autoParaStyle29">${msg('Efficiency')}</p>
            </div>
            <div id="item14825" class="pageItem">
              <p class="autoParaStyle29">${msg('Noise')}</p>
              <p class="autoParaStyle29">${msg('Management')}</p>
            </div>
            <div id="item14848" class="pageItem">
              <p class="autoParaStyle29">${msg('Scalable')}<br />${msg('Operations')}</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" class="pageItem state" name="Bar 100% Back 66%" data-ani-load="go({target:this},[{n:1,link:1,id:13309,act:'play'},{n:'infinite',link:1,id:13254,act:'play'},{n:'infinite',link:1,id:13253,sn:1,act:'play'},{n:1,link:1,id:15303,act:'play'},{n:1,link:1,id:15169,act:'play'},{n:1,id:15192,sn:1,act:'play'},{n:1,link:1,id:15215,act:'play'},{n:1,id:15285,sn:1,act:'play'},{n:1,link:1,id:15239,act:'play'},{n:1,id:15289,sn:1,act:'play'},{n:1,link:1,id:15262,act:'play'},{n:1,id:15292,sn:1,act:'play'}], 'stateload');">
          <div id="item13250" class="pageItem" alt="Movie" style="left:10px !important;top:10px !important;">
            <video width="375" height="670" data-id="13250" data-autoplay="1" data-autodelay="0" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" class="mejs-none">
              <source src="${import.meta.env.VITE_BASE_URL}/assets/media/Mobile-Main-stage 3-reverse.mp4" type="video/mp4"/>
            </video>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13099.png" data-ani="grow-13253 1s linear infinite" data-id="13253" id="item13253" data-hideend="1" alt="Polygon" style="left:28px !important;top:96px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12443.png" data-ani="grow-13254 1s linear infinite" data-id="13254" id="item13254" data-hideend="1" alt="Polygon" style="left:351px !important;top:96px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Bar-back%2066.gif" alt="Rectangle" style="width:350px !important;height:25px !important;left:21px !important;top:113px !important;" id="item13255" class="pageItem "/>
          <div id="item13281" class="pageItem singleline">
            <p class="autoParaStyle23">%</p>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12495.png" alt="Polygon" style="left:31px !important;top:122px !important;" id="item13304" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Back%2066.gif" alt="Rectangle" style="width:25px !important;height:20px !important;left:324px !important;top:136px !important;" id="item13305" class="pageItem "/>
          <div data-ani="moveright-13309 1s linear 1" data-id="13309" id="item13309" alt="Group" style="left:353px !important;top:118px !important;width: 10px !important;height:18px !important;" class="pageItem group ">
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12497.png" alt="Polygon" style="left:6px !important;" id="item13310" class="pageItem "/>
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13010.png" alt="Polygon" style="top:14px !important;" id="item13311" class="pageItem "/>
          </div>
          <button data-id="13386" name="Mobile-Next-ScalableOperations (R)" data-click-state="12305:5" aria-label="Mobile-Next-ScalableOperations (R)" id="item13386" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Mobile-Next-ScalableOperations (R)'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12443.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item13389" class="pageItem "/>
            </div>
          </button>
          <button data-id="13390" name="Mobile-Previous-EnergyEfficiency (R)" data-click-state="12305:2" aria-label="Mobile-Previous-EnergyEfficiency (R)" id="item13390" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Mobile-Previous-EnergyEfficiency (R)'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13099.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item13393" class="pageItem "/>
            </div>
          </button>
          <div alt="Text" style="left:77px !important;top:88px !important;" id="item15083" class="pageItem group ">
            <div id="item15084" class="pageItem">
              <p class="autoParaStyle29">${msg('Energy')}</p>
              <p class="autoParaStyle29">${msg('Efficiency')}</p>
            </div>
            <div id="item15107" class="pageItem">
              <p class="autoParaStyle29">${msg('Noise')}</p>
              <p class="autoParaStyle29">${msg('Management')}</p>
            </div>
            <div id="item15130" class="pageItem">
              <p class="autoParaStyle29">${msg('Scalable')}<br />${msg('Operations')}</p>
            </div>
          </div>
          <div alt="Simulate optimal flight paths to minimize ,Map noise propagation patterns to pinpoint problem areas,Virtually generat..." style="left:43px !important;top:191px !important;" id="item15168" class="pageItem group ">
            <div id="item15169" class="pageItem singleline hidden" data-ani="flyinfrombottom-15169 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="15169" data-hidestart="1">
              <p class="autoParaStyle30"><span class="autoCharStyle2">${msg('Noise')}</span> ${msg('Management')}</p>
            </div>
            <div id="item15192" class="pageItem hidden" data-ani="flyinfrombottom-15192 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="15192" data-hidestart="1">
              <p class="autoParaStyle31">${msg('Mastering aerodynamics and propulsion acoustics is the secret to a quieter aircraft. Break the noise barrier with unified modeling and simulation (MODSIM)')}:</p>
            </div>
            <div id="item15215" class="pageItem singleline hidden" data-ani="flyinfrombottom-15215 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="15215" data-hidestart="1">
              <p class="autoParaStyle26">${msg('Virtually generate and analyze propeller noise signatures')}</p>
            </div>
            <div id="item15239" class="pageItem singleline hidden" data-ani="flyinfrombottom-15239 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="15239" data-hidestart="1">
              <p class="autoParaStyle32"><span class="autoCharStyle1">${msg('Map noise propagation patterns to pinpoint problem areas')}</span></p>
            </div>
            <div id="item15262" class="pageItem singleline hidden" data-ani="flyinfrombottom-15262 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="15262" data-hidestart="1">
              <p class="autoParaStyle33">${msg('Simulate optimal flight paths to minimize noise impact')}</p>
            </div>
            <div data-ani="appear-15285 0.5s linear 1" data-id="15285" id="item15285" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:72px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item15286" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item15288" class="pageItem "/>
            </div>
            <div data-ani="appear-15289 0.5s linear 1" data-id="15289" id="item15289" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:92px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item15290" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item15291" class="pageItem "/>
            </div>
            <div data-ani="appear-15292 0.5s linear 1" data-id="15292" id="item15292" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:112px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item15293" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item15294" class="pageItem "/>
            </div>
          </div>
          <div id="item15303" class="pageItem singleline hidden" data-ani="fadein-15303 0.5s linear 1" data-id="15303" data-hidestart="1">
            <p class="autoParaStyle22">${msg('DATA  02')}</p>
          </div>
        </div>
        <div aria-hidden="true" class="pageItem state" name="Bar 100%" data-ani-load="go({target:this},[{n:1,link:1,id:13581,act:'play'},{n:'infinite',link:1,id:13525,sn:1,act:'play'},{n:1,link:1,id:13531,act:'play'},{n:1,link:1,id:13656,act:'play'},{n:1,id:13679,sn:1,act:'play'},{n:1,link:1,id:13772,act:'play'},{n:1,id:13702,sn:1,act:'play'},{n:1,link:1,id:13725,act:'play'},{n:1,id:13775,sn:1,act:'play'},{n:1,link:1,id:13749,act:'play'},{n:1,id:13778,sn:1,act:'play'}], 'stateload');">
          <div id="item13522" class="pageItem" alt="Movie" style="left:10px !important;top:10px !important;">
            <video width="375" height="670" data-id="13522" data-autoplay="1" data-autodelay="0" data-stoplast="1" data-nopause="1" webkit-playsinline="playsinline" playsinline="playsinline" data-overlap="1" class="mejs-none">
              <source src="${import.meta.env.VITE_BASE_URL}/assets/media/Mobile-Main-stage 3.mp4" type="video/mp4"/>
            </video>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13099.png" data-ani="grow-13525 1s linear infinite" data-id="13525" id="item13525" data-hideend="1" alt="Polygon" style="left:28px !important;top:96px !important;" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/Bar-100.gif" alt="Rectangle" style="width:350px !important;height:25px !important;left:22px !important;top:113px !important;" id="item13526" class="pageItem "/>
          <div id="item13531" class="pageItem singleline hidden" data-ani="fadein-13531 0.5s linear 1" data-id="13531" data-hidestart="1">
            <p class="autoParaStyle22">${msg('DATA  03')}</p>
          </div>
          <div id="item13554" class="pageItem singleline">
            <p class="autoParaStyle23">%</p>
          </div>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12495.png" alt="Polygon" style="left:32px !important;top:122px !important;" id="item13577" class="pageItem "/>
          <img src="${import.meta.env.VITE_BASE_URL}/assets/images/100.gif" alt="Rectangle" style="width:25px !important;height:20px !important;left:325px !important;top:136px !important;" id="item13578" class="pageItem "/>
          <div data-ani="moveright-13581 1s linear 1" data-id="13581" id="item13581" alt="Group" style="left:270px !important;top:118px !important;width: 10px !important;height:18px !important;" class="pageItem group ">
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_12497.png" alt="Polygon" style="left:6px !important;" id="item13582" class="pageItem "/>
            <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13010.png" alt="Polygon" style="top:14px !important;" id="item13583" class="pageItem "/>
          </div>
          <div alt="Design for scale manufacturing from the start to support production at rate,Introduce new functionalities without mig..." style="left:43px !important;top:191px !important;" id="item13654" class="pageItem group ">
            <div id="item13656" class="pageItem singleline hidden" data-ani="flyinfrombottom-13656 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="13656" data-hidestart="1">
              <p class="autoParaStyle24"><span class="autoCharStyle2">${msg('Scalable')}</span> ${msg('Operations')}</p>
            </div>
            <div id="item13679" class="pageItem hidden" data-ani="flyinfrombottom-13679 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="13679" data-hidestart="1">
              <p class="autoParaStyle25"><span class="autoCharStyle3">${msg('A scalable foundation is key to transitioning successfully to large-scale production. A cloud-based ecosystem provides the flexibility to scale on demand – without limits')}:</span></p>
            </div>
            <div id="item13702" class="pageItem singleline hidden" data-ani="flyinfrombottom-13702 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="13702" data-hidestart="1">
              <p class="autoParaStyle26">${msg('Onboard teams quickly to support growth')}</p>
            </div>
            <div id="item13725" class="pageItem singleline hidden" data-ani="flyinfrombottom-13725 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="13725" data-hidestart="1">
              <p class="autoParaStyle27">${msg('Introduce new functionalities without migrating data between systems')}</p>
            </div>
            <div id="item13749" class="pageItem hidden" data-ani="flyinfrombottom-13749 0.5s cubic-bezier(.2,.6,.35,1) 1" data-id="13749" data-hidestart="1">
              <p class="autoParaStyle28">${msg('Design for scale manufacturing from the start to support production at rate')}</p>
            </div>
            <div data-ani="appear-13772 0.5s linear 1" data-id="13772" id="item13772" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:72px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item13773" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item13774" class="pageItem "/>
            </div>
            <div data-ani="appear-13775 0.5s linear 1" data-id="13775" id="item13775" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:92px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item13776" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item13777" class="pageItem "/>
            </div>
            <div data-ani="appear-13778 0.5s linear 1" data-id="13778" id="item13778" data-hidestart="1" class="pageItem group hidden" alt="Group" style="left:2px !important;top:112px !important;width: 9px !important;height:9px !important;">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13776.png" alt="Polygon" style="left:1px !important;" id="item13779" class="pageItem "/>
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13777.png" alt="Polygon" id="item13780" class="pageItem "/>
            </div>
          </div>
          <button data-id="13784" name="Mobile-Previouse-NoiseManagement" data-click-state="12305:4" aria-label="Mobile-Previouse-NoiseManagement" id="item13784" class="pageItem " onclick="ds_event('this', 'clic', {event: 'clic', event_category: 'Navigation', event_action: 'iframe_menu', event_name: 'Mobile-Previous-NoiseManagement'});">
            <div class="pageItem state btn-off">
              <img src="${import.meta.env.VITE_BASE_URL}/assets/images/item_13099.png" alt="Polygon" style="left:3px !important;top:3px !important;" id="item13787" class="pageItem "/>
            </div>
          </button>
          <div alt="Text" style="left:77px !important;top:88px !important;" id="item15336" class="pageItem group ">
            <div id="item15337" class="pageItem">
              <p class="autoParaStyle29">${msg('Energy')}</p>
              <p class="autoParaStyle29">${msg('Efficiency')}</p>
            </div>
            <div id="item15360" class="pageItem">
              <p class="autoParaStyle29">${msg('Noise')}</p>
              <p class="autoParaStyle29">${msg('Management')}</p>
            </div>
            <div id="item15383" class="pageItem">
              <p class="autoParaStyle29">${msg('Scalable')}<br />${msg('Operations')}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="item13788" class="pageItem singleline">
        <p class="autoParaStyle42">${msg('Click on the arrow')}</p>
      </div>
      <div id="item13811" class="pageItem">
        <p class="autoParaStyle43">${msg('Explore solutions to')}</p>
        <p class="autoParaStyle43">${msg('three key challenges')}</p>
      </div>
    </div>
  </li>
</ul>
<div id="prefooter" style="float:left;height:1px;">&nbsp;</div>
</div>
<footer id="in5footer"><a href="http://ajarproductions.com/pages/products/in5/?ref=footer" target="_blank" >Built with in5</a>.</footer>
</div>
<nav id="page-nav">
<button id="nextBtn" name="nextBtn" aria-label="next page button">&nbsp;</button>
<button id="backBtn" name="backBtn" aria-label="previous page button">&nbsp;</button>
</nav>
</body>
`;