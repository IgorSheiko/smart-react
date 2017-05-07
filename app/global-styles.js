import { injectGlobal } from 'styled-components';
/* eslint no-unused-expressions: 0 */
injectGlobal`

  html,
  body {
    height: 100%;
  }
  body {
    font-family: 'Arimo', sans-serif;
  }
  a {
    display: inline-block;
    transition: all 0.1s ease-in-out;
    color: #163966;
  }
  a:hover,
  a:focus {
    color: #942421;
    text-decoration: underline;
  }
  p {
    line-height: 1.3;
  }
  button {
    transition: all 0.1s ease-in-out;
  }
  .page {
    position: relative;
    min-height: 100%;
    overflow: hidden;
    padding-bottom: 175px;
    @media (max-width:767px) {
      padding-bottom: 145px;
    }
  }
  footer {
    width: 100%;
    position: absolute;
    z-index: 5;
    left: 0;
    bottom: 0;
    background: #fff;
  }
  .footer__text {
    font-size: 12px;
    color: gray;
    margin-top: 70px;
    @media (max-width:767px) {
      margin-top: 60px;
    }
  }
  .form-group {
    margin-bottom: 10px;
  }
  .header__heading {
    color: #fff;
    font-family: MyriadProSemiBold;
    font-family: 'PT Sans', sans-serif;
    font-size: 170px;
    font-weight: bold;
    line-height: 1;
    display: inline-block;
    text-transform: uppercase;
    position: relative;
    margin: 0;
    @media (max-width:991px) {
      font-size: 13.5vw;
    }
  }
  .header__heading-before span {
    margin-top: 30px;
  }
  .header__heading-after {
    margin-bottom: 30px;
    @media (max-width:991px) {
      margin-bottom: 0px;
    }
  }
  .header__heading-before span,
  .header__heading-after span {
    background: rgba(0, 0, 0, 0.8);
    font-size: 28px;
    font-weight: bold;
    display: inline-block;
    padding: 0 7px;
    color: #fff;
    text-transform: uppercase;
    @media (max-width:991px) {
      font-size: 2.6vw;
    }
  }
  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked,
  [type="radio"]:not(:checked),
  [type="radio"]:checked {
    position: absolute;
    left: -9999px;
  }
  input[type="radio"],
  input[type="checkbox"] {
    margin: 4px 0 0;
    margin-top: 1px;
    line-height: normal;
  }
  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="checkbox"]:not(:checked) + label,
  [type="checkbox"]:checked + label,
  .checkbox label,
  [type="radio"]:not(:checked) + label,
  [type="radio"]:checked + label,
  .radio label {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    font-weight: normal;
  }
  [type="radio"]:not(:checked) + label,
  [type="radio"]:checked + label,
  .radio label {
    color: #8a8a8a;
  }
  [type="checkbox"]:not(:checked) + label:before,
  [type="checkbox"]:checked + label:before,
  .checkbox label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    border-radius: 2px;
    background-color: #ffffff;
    width: 16px;
    height: 16px;
    box-shadow: none;
    border: 1px solid #ddd;
  }
  [type="radio"]:not(:checked) + label:before,
  [type="radio"]:checked + label:before,
  .radio label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0px;
    background-color: #ffffff;
    box-shadow: none;
    border-style: solid;
    border-width: 1px;
    border-color: #c1c1c1;
    border-radius: 50%;
    width: 18px;
    height: 18px;
  }
  [type="checkbox"]:not(:checked) + label:after,
  .checkbox label:after,
  [type="radio"]:not(:checked) + label:after,
  .radio label:after {
    opacity: 0;
    transform: scale(0);
  }
  [type="checkbox"]:not(:checked) + label:after,
  [type="checkbox"]:checked + label:after,
  .checkbox label:after {
    content: '✔';
    position: absolute;
    top: 5px;
    left: 3px;
    font-size: 13px;
    line-height: .9;
    color: #000;
    transition: all .2s;
  }
  [type="radio"]:not(:checked) + label:after,
  [type="radio"]:checked + label:after,
  .radio label:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    line-height: .9;
    border-radius: 50%;
    background-color: #8a8a8a;
    width: 8px;
    height: 8px;
    transition: all .2s;
  }
.react-bs-table{
  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked,
  [type="radio"]:not(:checked),
  [type="radio"]:checked{
    position:static;
  }
}
.react-bs-table{
  table{
    margin-top: 0px;
  }
}
  .radio-header {
    color: #942421;
    font-size: 16px;
    margin-bottom: 0;
  }
  .radio-subheader {
    font-size: 16px;
  }
  .form-group {
    position: relative;
  }
  .form-control {
    border-style: solid;
    border-width: 1px;
    border-color: #e4e4e4;
    border-radius: 2px;
    height: 42px;
  }
  .forgot-password-link {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 33px;
    right: 15px;
    z-index: 5px;
  }
  .link-xs-grey {
    font-size: 12px;
    color: gray;
    text-decoration: underline;
  }
  .grey-text {
    color: #8a8a8a;
  }
  .start-form {
    position: relative;
    z-index: 6;
    max-width: 460px;
    margin-top: 25px;
    left: 10px;
  }
  .btn.btn-rounded {
    border-radius: 35px;
    outline: none !important;
  }
  .form-group-checkbox {
    margin-top: 13px;
  }
  .form-group-checkbox label {
    font-weight: normal;
  }
  .form-group-checkbox.form-group--start {
    margin-top: 13px;
  }
  .btn {
    min-width: 114px;
  }
  .btn-lg,
  .btn-group-lg > .btn {
    padding: 12px 16px;
    font-size: 14px;
  }
  .btn-reg {
    width: 314px;
    margin-bottom: 25px;
  }
  .btn-default {
    background-color: transparent;
    border-color: #fff;
    border-width: 2px;
    color: #fff;
  }
  .login-connect {
    border-radius: 50%;
    width: 46px;
    height: 46px;
    display: inline-block;
    margin: 2px 5px;
  }
  .login-connect-vk {
    background-color: #4c74a2;
    background-image: url(../img/soc.png);
    background-repeat: no-repeat;
    background-position: 12px 50%;
  }
  .login-connect-fb {
    background-color: #3b579d;
    background-image: url(../img/soc.png);
    background-repeat: no-repeat;
    background-position: -44px 50%;
  }
  .text-white {
    color: #fff;
  }
  .form-group--start {
    margin: 0 3px;
  }
  .form-inline .form-group--start {
    margin-bottom: 10px;
  }
  .form-group--enter {
    float: right;
  }
  .btn-default:hover,
  .btn-default:focus,
  .btn-default:active,
  .btn-default.active,
  .open > .dropdown-toggle.btn-default {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.2);
    border-color: #fff;
  }
  .form-control--passw {
    padding-right: 80px;
  }
  .form-inline .form-control--start {
    width: 207px;
  }
  .form-group-white,
  .form-group-white .control-label {
    color: #fff;
    font-weight: normal;
  }
  .sign-header-2 {
    text-transform: uppercase;
    color: #fff;
    font-size: 60px;
    font-weight: bold;
    margin: 0;
    line-height: 1;
    @media (max-width:991px) {
      font-size: 4vw;
      margin-top: 20px;
    }
  }
  .sign-header-3 {
    text-transform: uppercase;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    margin: 0;
    line-height: 1;
    @media (max-width:991px) {
      font-size: 2.5vw;
      margin-top: 10px;
    }
  }
  .reset-password {
    text-transform: uppercase;
    color: #fff;
    margin: 0;
    line-height: 1;
    h2 {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 15px;
      @media (max-width:991px) {
        font-size: 2vw;
        margin-top: 20px;
      }
    }
    div {
      font-size: 15px;
      margin-bottom: 10px;
      @media (max-width:991px) {
        font-size: 1.5vw;
        margin-top: 20px;
      }
    }

  }
  h2,
  h3 {
    font-family: "MyriadProRegular";
    font-family: 'PT Sans', sans-serif;
  }
  .sign-form {
    margin-top: 40px;
    margin-bottom: 50px;
  }
  .select2-container--default .select2-selection--single {
    border-radius: 2px;
  }
  .select2-container .select2-selection--single {
    height: 42px;
  }
  .form-group-checkbox a {
    color: #fff;
    text-decoration: underline;
  }
  .btn {
    min-height: 40px;
  }
  .btn-danger-dark {
    color: #fff !important;
    background-color: #942421 !important;
    border-color: #942421 !important;
  }
  .btn-danger-dark:hover,
  .btn-danger-dark:focus,
  .btn-danger-dark:active,
  .btn-danger-dark.active {
    color: #fff;
    background-color: #c9302c;
    border-color: #ac2925;
  }
  .btn {
    border-radius: 2px;
  }
  .ladda-button {
    font-size: 15px !important;
  }
  .ladda-button[disabled] {
    cursor: not-allowed !important;
  }
  .form-horizontal .form-group.form-group-checkbox,
  .form-horizontal .form-group.form-group-radio {
    margin: 0;
  }
  .form-horizontal .form-group.form-group-radio,
  .form-group.form-group-radio {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .form-group-radio p {
    margin-bottom: 7px;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .white-link {
    color: #fff;
    text-decoration: underline;
  }
  .form-group-right-link {
    margin-left: 78px;
  }
  .form-inline .form-group--start20 {
    margin-bottom: 20px;
  }
  .form-group-right {
    float: right;
  }
  .send-again-link {
    margin-top: 10px;
  }
  .form-inline .form-control--kod {
    width: 271px;
  }
  .pocket-image {
    display: block;
    height: 50px;
    margin: 30px auto 14px;
  }
  .packet-name {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;

  }
  .packet {
    border-style: solid;
    border-width: 1px;
    border-color: #ffffff;
    border-radius: 5px;
    position: relative;
    height: 143px;
    width: 30%;
    float: left;
    margin-left: 5%;
  }
  .packet-container .packet:first-child {
    margin-left: 0;
  }
  [type="radio"] + label.packet-name {
    color: #fff;
    position: absolute !important;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin-bottom: 0;
    padding: 0;
    padding-top: 95px;
  }

  [type="radio"]:not(:checked) + label.packet-name:before,
  [type="radio"]:checked + label.packet-name:before,
  .radio label.packet-name:before {
    content: none;
  }
  [type="radio"]:not(:checked) + label.packet-name:after,
  [type="radio"]:checked + label.packet-name:after,
  .radio label.packet-name:after {
    content: '';
    top: 0;
    left: 0;
    background-color: rgba(255, 6, 6, 0.1);
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 2px 2px red;
    transition: box-shadow 0.2s linear;
  }
  .packet-container {
    margin-top: 25px;
    margin-bottom: 40px;
  }
  .pocket-header {
    margin-top: 40px;
  }
  .text-md {
    font-size: 16px;
  }
  .btns-offset {
    margin-bottom: 100px;
    margin-top: 40px;
  }
  .table {
    width: 100%;
    border: 1px solid #FFFFFF;
    border-collapse: collapse;
    padding: 5px;
    margin-top: 50px;
    margin-bottom: 50px;
    @media (max-width:767px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .table th {
    border: 1px solid #FFFFFF;
    padding: 5px;
    background: #e4e4e4;
  }
  .table td {
    border: 1px solid #FFFFFF;
    padding: 5px;
  }
  .table > thead > tr > th {
    border-bottom: 2px solid #fff;
    color: gray;
    font-weight: normal;
    font-size: 12px;
    text-align: center;
  }
  .table-strip tbody tr:nth-child(odd) {
    background-color: #f4f4f4;
  }
  .table-strip tbody tr:nth-child(odd):hover,
  tr:hover {
    background-color: #e7ebef;
  }
  .table > tbody > tr > td {
    vertical-align: middle;
  }
  .table > thead > tr > th,
  .table > tbody > tr > th,
  .table > tfoot > tr > th,
  .table > thead > tr > td,
  .table > tbody > tr > td,
  .table > tfoot > tr > td {
    padding: 12px;
    line-height: 1.25;
  }
  .gray-bg {
    background-color: #f0f0f0;
  }
  .grad-line {
    height: 5px;
    width: 100%;
    background: #b54646;
    background: -moz-linear-gradient(left, #b54646 0%, #111557 75%, #111557 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, #b54646), color-stop(75%, #111557), color-stop(100%, #111557));
    background: -webkit-linear-gradient(left, #b54646 0%, #111557 75%, #111557 100%);
    background: -o-linear-gradient(left, #b54646 0%, #111557 75%, #111557 100%);
    background: -ms-linear-gradient(left, #b54646 0%, #111557 75%, #111557 100%);
    background: linear-gradient(to right, #b54646 0%, #111557 75%, #111557 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#b54646', endColorstr='#111557', GradientType=1);
  }
  .mazarine {
    color: #163966;
  }
  .xs-grey {
    font-size: 12px;
    color: gray;
  }
  .dark-gray {
    color: #464648;
  }
  .gray-bg .dark-gray {
    margin-top: 12px;
    margin-bottom: 16px;
  }
  .control-label {
    font-weight: normal;
  }
  textarea {
    resize: none;
  }
  .form-control.ask-textarea {
    height: 275px;
    @media (max-width:767px) {
      height: 175px;
    }
  }
  .static-page {
    margin-top: 40px;
    margin-bottom: 80px;
  }
  h4 {
    color: #000;
    font-size: 24px;
    margin-bottom: 20px;
  }
  h5 {
    color: #000;
    font-size: 16px;
    margin-bottom: 15px;
  }
  .img-container {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .mb80 {
    margin-bottom: 80px;
  }
  .video-container {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  iframe {
    border: 0;
  }
  .modal-backdrop {
    z-index: 0;
  }

  .white-text {
    color: #fff;
  }
  .white-text h4,
  .white-text h5 {
    color: #fff;
  }
  .btn-buy-course {
    margin: 30px auto 20px;
  }
  .btn-big-bright-danger {
    font-size: 24px !important;
    background-color: #e5403b !important;
    padding: 8px 26px 10px !important;
    box-shadow: 0 5px 0 -1px #942421 !important;
  }
  .btn.btn-big-bright-blue {
    font-size: 24px !important;
    background-color: #387bd0 ;
    padding: 8px 26px 10px !important;
    box-shadow: 0 5px 0 -1px #174887;
    border-color: #135ebe;
  }

  .buy-modal {
    .buy-modal-close-icon {
      margin-top: -20px;
    }
    .modal-content {
      background: #84374b;
      background: -moz-linear-gradient(left, #84374b 0%, #693f61 30%, #121457 100%);
      background: -webkit-gradient(left top, right top, color-stop(0%, #84374b), color-stop(30%, #693f61), color-stop(100%, #121457));
      background: -webkit-linear-gradient(left, #84374b 0%, #693f61 30%, #121457 100%);
      background: -o-linear-gradient(left, #84374b 0%, #693f61 30%, #121457 100%);
      background: -ms-linear-gradient(left, #84374b 0%, #693f61 30%, #121457 100%);
      background: linear-gradient(to right, #84374b 0%, #693f61 30%, #121457 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#84374b', endColorstr='#121457', GradientType=1);
    }
    p {
      font-size: 15px;
      margin-bottom: 20px;
    }
    label {
      font-size: 14px;
    }
    .modal-header {
      position: absolute;
      width: 588px;
      height: 220px;
      top: 0;
      right: 0;
      border-bottom: 0;
      padding-left: 150px;
      padding-top: 40px;
      z-index: 1;
    }
    .header-image {
      position: absolute;
      width: 588px;
      height: 220px;
      top: 0;
      right: 0;
    }
    .modal-body {
      padding-top: 240px;
    }
    .modal-content .bch {
      text-transform: uppercase;
      font-family: "MyriadProRegular";
      font-family: 'PT Sans', sans-serif;
      font-weight: bold;
      margin-bottom: 0;
      line-height: 1;
    }
    .modal-content .bch1 {
      font-size: 24px;
    }
    .modal-content .bch2 {
      font-size: 32px;
    }
    .modal-content .bch3 {
      font-size: 45px;
    }
  }

  .choko {
    color: #942421;
  }

  .close {
    opacity: 0.8;
  }

  .add-calendar-icon {
    background: url("../img/addcal.png") 0 center no-repeat;
  }
  .del-calendar-icon {
    background: url("../img/delcal.png") 0 center no-repeat;
  }
  .calendar-icon {
    padding-left: 24px;
    cursor: pointer;
  }
  td .fa {
    color: #163966;
    margin: 0 5px;
    vertical-align: middle;
    cursor: pointer;
  }
  td .fa:hover {
    color: #942421;
  }
  td .fa-pencil {
    font-size: 18px;
  }
  td .fa-trash-o {
    font-size: 18px;
  }
  td .fa-info {
    font-size: 22px;
  }
  .red {
    color: #d73430;
  }
  .yellow {
    color: #dc9a44;
  }
  .default-color {
    color: #8a8a8a;
  }
  .text-ellips {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
  .text-ellips--intd {
    width: 260px;
    color: #1a3d69;
    text-decoration: underline;
    cursor: pointer;
  }
  td.over-td {
    width: 40%;
  }
  .rate-stars .fa {
    color: #b54646;
    margin: 0 2px;
    vertical-align: middle;
  }
  .breadcrumb > li + li:before {
    color: #464648;
    content: "»";
  }
  .breadcrumb {
    background-color: transparent;
    display: inline-block;
    margin-bottom: 0;
    padding: 0;
  }
  .breadcrumb > .active {
    color: #464648;
  }
  .btn-mazarine {
    color: #1a3d69 !important;
    border: 2px solid #1a3d69 !important;
    background: none !important;
  }
  .btn-mazarine:hover {
    color: #fff;
    background-color: #1a3d69 !important;
  }
  .btn-low {
    min-height: 26px;
    height: 26px;
    padding: 0px 20px !important;
  }
  .fl-left {
    float: left;
  }
  .fl-right {
    float: right;
  }
  .gray-menu {
    padding: 10px 0;
  }
  .sm-txt {
    font-size: 12px;
  }
  .dotted-link {
    border-bottom: 1px dotted #1a3d69;
    line-height: 1;
    text-decoration: none;
  }
  .dotted-link:hover {
    border-bottom: 1px dotted #942421;
    text-decoration: none;
  }
  .rate {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 21px;
    background-image: url('img/rating-sprite.png');
    background-repeat: no-repeat;
    background-position: 0 0;
  }
  .rate-white {
    background-position: 0 0px;
  }
  .rate-yellow {
    background-position: 0 -33px;
  }
  .rate-red {
    background-position: 0 -67px;
  }
  .rate-green {
    background-position: 0 -101px;
  }
  .rate-blue {
    background-position: 0 -135px;
  }
  .rate-violet {
    background-position: 0 -169px;
  }
  .rate-brown {
    background-position: 0 -203px;
  }
  .rate-black {
    background-position: 0 -237px;
  }
  .btn-blue-dark {
    color: #fff !important;
    background-color: #163966 !important;
    border-color: #163966 !important;
  }
  .btn-blue-dark:hover,
  .btn-blue-dark:focus,
  .btn-blue-dark:active,
  .btn-blue-dark.active {
    color: #fff;
    background-color: #0f5ec5;
    border-color: #0f5ec5;
  }
  a.btn:not(.btn-lg) {
    padding-top: 8px;
  }
  a.btn.btn-low {
    padding-top: 0px;
  }
  h4 + .table {
    margin-top: 25px;
  }
  .posit-color {
    color: #8eae1f;
  }
  .minus-color {
    color: #942421;
  }
  .gray-menu p {
    color: #464648;
    display: inline-block;
    margin-bottom: 0;
  }
  .dark-gray-bg {
    background: #cccccc!important;
  }
  .dark-gray-bg .fa {
    display: block;
  }
  .table .dark-gray-bg {
    color: #fff;
  }
  .table > thead > tr > th {
    vertical-align: middle;
  }
  .table .th-arrow {
    padding-top: 15px;
    padding-bottom: 3px;
  }
  .points-info__name {
    text-transform: uppercase;
    font-size: 12px;
  }
  .lg-txt {
    font-size: 24px;
  }
  .red-txt {
    color: #93221f;
  }
  .points-info__name--link {
    color: #b54646;
    text-decoration: underline;
  }
  .points-info__container .fa {
    color: #b54646;
    font-size: 18px;
  }
  .points-info__container {
    display: inline-block;
    border-style: solid;
    border-width: 2px;
    border-color: #eaeaea;
    border-radius: 5px;
    width: 262px;
    height: 72px;
    padding: 15px ;
  }
  .points-info__container .lg-txt.red-txt {
    line-height: 1;
  }
  .points-info__container .rate {
    margin-bottom: 5px;
  }
  .points-info {
    margin: 50px 0 80px;
  }
  .select2-container--default .select2-selection--single .select2-selection__rendered {
    padding-top: 5px;
  }
  .select2-container--default .select2-selection--single {
    border: 1px solid #e4e4e4;
  }
  .form-control:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .no-border {
    border-color: transparent;
    padding-left: 0;
  }
  .gray-menu {
    margin-bottom: 45px;
    @media (max-width: 767px) {
      margin-bottom: 25px;
    }
  }
  .form-control.textarea-middle {
    height: 170px;
  }
  textarea.form-control {
    min-height: 80px;
  }
  .mr10 {
    margin-right: 10px;
  }
  .mt10 {
    margin-top: 10px !important;
  }
  .underlined {
    text-decoration: underline;
  }
  .file-box {
    overflow: hidden;
    background-color: #8a8a8a;
    cursor: pointer;
    width: 94px;
    height: 40px;
    position: relative;
  }
  .file-box:before {
    content: 'Обзор';
    color: #fff;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 38px;
  }
  .mobile-view-nav,
  .menuh {
    display: none;
  }
  .menu {
    width: 100%;
    z-index: 4;
    position: fixed;
    top: 100px;
    height: 60px;
    background: #b54646;
    background: -moz-linear-gradient(left, #b54646 0%, #562950 30%, #111557 55%, #111557 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, #b54646), color-stop(30%, #562950), color-stop(55%, #111557), color-stop(100%, #111557));
    background: -webkit-linear-gradient(left, #b54646 0%, #562950 30%, #111557 55%, #111557 100%);
    background: -o-linear-gradient(left, #b54646 0%, #562950 30%, #111557 55%, #111557 100%);
    background: -ms-linear-gradient(left, #b54646 0%, #562950 30%, #111557 55%, #111557 100%);
    background: linear-gradient(to right, #b54646 0%, #562950 30%, #111557 55%, #111557 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#b54646', endColorstr='#111557', GradientType=1);
    @media (max-width: 767px) {
      top: 0;
    }
  }
  .menu .wrap {
    height: 100%;
    &> ul {
      height: 100%;
      > li {
        height: 100%;
        vertical-align: top;
      }
    }
  }
  .hotlinks {
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 100px;
    background: #fff;
    ul li:first-child {
      float: left;
    }
    @media (min-width: 768px) {
      padding-top: 20px;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  .menu ul li > a {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 21px;
    height: 100%;
    &:hover {
      text-decoration: none;
    }
  }

  .menu ul li > .fa {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 19px;
  }
  .menu ul li > a,
  .menu ul li > .fa {
    @media (max-width: 991px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  .menu ul li a {
    color: #fff;
    font-size: 12px;
  }
  .menu .fa,
  .menu p {
    color: #fff;
  }
  .menu .fa-cog {
    font-size: 21px;
  }
  .menu .fa-envelope {
    font-size: 20px;
  }
  ul,
  ol {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
  .menu > ul {
    height: 100%;
  }
  .menu > ul li {
    height: 100%;
  }
  ul li {
    display: inline-block;
  }
  .private-box {
    display: inline-block;
    overflow: hidden;
    position: relative;
    padding-right: 20px;
    height: 100%;
    vertical-align: middle;
  }
  .private-box p {
    font-size: 12px;
  }
  @media (min-width: 992px) {
    .private-box {
      padding-left: 63px;
    }
    .private-box:before {
      content: '';
      background: #fff;
      width: 6px;
      height: 100px;
      transform: rotate(45deg) translate(0, -10px);
      display: inline-block;
      transform-origin: center 0;
      position: absolute;
    }
  }
  .private-box__icon {
    height: 44px;
    width: 44px;
    overflow: hidden;
    border: 3px solid #fff;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin-top: 8px;
    margin-left: 20px;
    @media (max-width: 720px) {
      margin-left: 0px;
    }
  }
  .private-box__icon img {
    max-width: 100%;
  }
  .private-box__info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    margin-top: 8px;
  }
  .private-box__info p {
    margin-bottom: 0;
    width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .wrap {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 991px) {
      max-width: 96%;
    }
  }
  .menu .menuhidden:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .private-box__link {
    text-decoration: underline;
  }
  .video-container--adapt {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }
  .video-container--adapt iframe,
  .video-container--adapt object,
  .video-container--adapt embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .mt20 {
    margin-top: 20px;
  }
  hr {
    border-top: 1px solid #e5e5e5;
  }
  .fa-star,
  .fa-star-o {
    color: #b54646;
  }
  label {
    font-weight: normal;
  }
  .pr0 {
    padding-right: 0;
  }
  .pl0 {
    padding-left: 0;
  }
  .form-control-info {
    background-color: #e4e4e4;
  }
  .form-control-info .fa {
    font-size: 22px;
    padding-top: 3px;
    color: #fff;
  }
  .file-box--download,
  .file-box--update {
    background-color: #163966;
    cursor: pointer;
    width: 100%;
    max-width: 186px;
  }
  .file-box--download:before {
    content: "Загрузить фото";
  }
  .file-box--update:before {
    content: "Обновить фото";
  }
  .cab-checkbox {
    padding-top: 9px;
  }
  .disabled {
    border-color: #8a8a8a !important;
    background-color: #8a8a8a !important;
  }
  .ui-datepicker-inline {
    margin: auto;
  }
  .ui-state-default,
  .ui-widget-content .ui-state-default,
  .ui-widget-header .ui-state-default {
    border-color: transparent;
    background: #fff;
    color: #000000;
  }
  .ui-widget-header {
    border-color: transparent;
    background: #fff;
    color: #942421;
  }
  .ui-datepicker table {
    font-size: 12px;
  }
  .calendar-box {
    min-height: 235px;
  }
  .ui-state-highlight,
  .ui-widget-content .ui-state-highlight,
  .ui-widget-header .ui-state-highlight,
  .ui-state-active,
  .ui-widget-content .ui-state-active,
  .ui-widget-header .ui-state-active {
    border: 1px solid transparent;
    background: #942421;
    color: #fff;
  }
  .ui-datepicker th {
    color: gray;
    font-weight: 400;
  }
  .red-points {
    color: #93221f;
    font-size: 24px;
  }
  .rounded-info {
    border-radius: 50%;
    width: 17px;
    height: 17px;
    background-color: #aeaeae;
    margin-top: 9px;
  }
  .rounded-info .fa-info {
    color: #fff;
    font-size: 10px;
    position: relative;
    top: -2px;
  }
  .points-left {
    line-height: 34px;
  }
  .download-video {
    margin-bottom: 40px;
    max-width: 186px;
    width: 100%;
  }
  .banner-box {
    margin-bottom: 80px;
  }
  .poedinok-tabs .nav-tabs > li > a {
    background-color: #b54646;
    color: #fff;
    margin-right: 10px;
    position: relative;
  }
  .poedinok-tabs .nav-tabs > li > a:hover {
    border-color: #b54646 #b54646 #b54646;
  }
  .poedinok-tabs .nav-tabs > li > a:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 100%;
    border-bottom: 41px solid #b54646;
    border-right: 41px solid transparent;
    transition: all 0.1s ease-in-out;
  }
  .poedinok-tabs .nav > li > a:hover,
  .poedinok-tabs .nav > li > a:focus {
    background-color: #8d2626;
    z-index: 5;
  }
  .poedinok-tabs .nav > li > a:hover:before,
  .poedinok-tabs .nav > li > a:focus:before {
    border-bottom-color: #8d2626;
    transition: all 0.1s ease-in-out;
  }
  .poedinok-tabs .nav-tabs > li.active > a,
  .poedinok-tabs .nav-tabs > li.active > a:hover,
  .poedinok-tabs .nav-tabs > li.active > a:focus {
    z-index: 2;
    color: #000;
  }
  .poedinok-tabs .nav-tabs > li.active > a:before,
  .poedinok-tabs .nav-tabs > li.active > a:hover:before,
  .poedinok-tabs .nav-tabs > li.active > a:focus:before {
    border-bottom-color: #fff;
  }
  #app,
  div[data-reactroot],
  .AppWrapper {
    height: 100%;
  }
  .steps-navigator {
    display: none;
  }
  .steps-nav-prev,
  .steps-nav-next {
    outline: none;
    min-width: 114px;
    min-height: 40px;
    text-align: center;
    border-radius: 2px;
  }
  .steps-nav-prev[disabled],
  .steps-nav-next[disabled] {
    display: none;
  }
  .steps-nav-next {
    color: #fff;
    background-color: #942421;
    border-color: #942421;
    float: right;
  }
  .steps-nav-next:hover {
    color: #fff;
    background-color: #c9302c;
    border-color: #ac2925;
  }
  .steps-nav-prev {
    color: #fff;
    background-color: transparent;
    border: 2px solid #fff;
  }
  .steps-nav-prev:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .steps-nav {
    max-width: 768px;
    margin: 0px auto 50px;
    padding: 0 15px;
  }
  .steps-nav:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  /* Start adaptive css*/
  .container {
    @media (min-width: 992px) {
      width: 930px;
    }
  }
  .menu-mobile-logo {
    @media (min-width: 768px) {
      display: none;
    }
  }
  .menu-page {
    padding-top: 160px;
    @media (max-width: 767px) {
      padding-top: 60px;
    }
  }
  .hotlinks ul li:not(:first-child) a {
    @media (min-width: 768px) {
      font-size: 12px;
      text-decoration: underline;
      margin-left: 40px;
      padding-top: 20px;
    }
  }
  .form-horizontal label {
    @media (min-width: 768px) {
      margin-bottom: 0;
      text-align: right;
      line-height: 1.3;
    }
  }
  .menuhh, .menuh {
    @media (max-width: 767px) {
      display: inline-block;
    }
  }
  .mobile-view-nav {
    @media (max-width: 767px) {
      position: fixed;
      right: 0;
      display: block;
      top: 0;
      padding-top: 60px;
      width: 75%;
      height: 100%;
      z-index: 11;
      background: #f0f8ff;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
      transition: right 0.2s ease-in-out;
    }
  }
  .mobile-view-nav li {
    @media (max-width: 767px) {
      display: block;
      margin: 18px 0;
    }
  }
  .mobile-view-nav li a {
    @media (max-width: 767px) {
      color: #000;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 14px;
      padding-left: 25px;
    }
  }
  .menuhidden {
    @media (max-width: 767px) {
      display: none;
    }
  }
  .menu ul li.menu-mobile-logo > a {
    @media (max-width: 767px) {
      padding-top: 10px;
    }
  }

  /* End adaptive css*/



  .Select-control {
      border: 1px solid #e4e4e4;
      color: #555;
      border-radius: 2px;
      height: 42px;
  }
  .Select-placeholder,
  .Select--single > .Select-control .Select-value {
      line-height: 38px;
      padding-left: 12px;
      padding-right: 12px;
  }
  html {
    font-size: 16px;
  }
  .react-datepicker__day--highlighted {
    border-radius: 2px;
    background-color: #ae4447;
  }
  .duels-filter-list {
    float: left;
    li {
      display: inline-block;
    }
  }
  .no-pad-menu {
    height: 46px;
    .container,
    .row,
    .row>div,
    ol, ul, li,
    a:not(.btn-rounded) {
      height: 100%;
    }
    li, li a, li>span {
      display:  inline-block;
      vertical-align: middle;
    }
    li a {
      padding: 12px 12px 0;
    }
    p {
      padding-top: 12px;
    }
    li>span {
      padding: 12px 12px 0 0;
    }
    .btn-rounded {
      margin-top: 9px;
    }
  }
  .duels-filter-list .tab-link {
    padding: 12px 12px 0;
    height: 100%;
  }
  label[for='agree-keep-login'] {
    color: #fff;
  }
  .tab-link:not(.tab-link-active) span {
    text-decoration: underline;
    color: #1a3d69;
  }
  .tab-link-active {
    font-weight: normal !important;
    background: #fff;
  }

  /* validation styles */

  .error-container {
      z-index: 10;
      position: absolute;
      display: none;
      top: 50%;
      transform: translateY(-50%);
      left: 100%;
      width: 150px;
      lineheight: 1;
      background: rgba(255, 0, 2, 0.8);
      padding: 5px 10px 6px 10px;
      margin-left: 5px;
      color: white;
      font-size: 12px;
      border-radius: 5px;
      -webkit-transition: all 0.2s ease-in-out;
      -moz-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
  }

  .error .error-container {
      display: block;
  }

 .error-container-bottom {
      left: 0px;
      top: 100%;
      width: 100%;
      margin-top: 7px;
      margin-left: 0px;
      text-align: center;
      transform: none;
  }

  .error-container:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right: 5px solid rgba(255, 0, 2, 0.8);
    right: 100%;
  }

  .error-container.error-container-bottom:before {
    bottom: 100%;
    top: auto;
    transform: none;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-bottom: 5px solid rgba(255, 0, 2, 0.8);
  }
  .error .form-control {
    border: 1px solid #ff0002;
    background: #ffcace;
  }
  @media (max-width: 991px) {
    .error-container {
      position: relative;
      top: 0px;
      left: 0;
      border-radius: 0;
      font-size: 12px;
      padding: 0 15px;
    }
    .error-container:before {
      display: none;
    }
  }

  .inline-elements > div{
    display: inline-block;
  }

  .no-label {
    display: none;
  }
  .text-left {
    text-align: left !important;
  }

  .file-label > div:before {
      content: "Обзор";
      background-color: #8a8a8a;
      cursor: pointer;
      color: #fff;
      text-align: center;
      position: absolute;
      top: 0p;
      bottom: 0;
      right: 0;
      width: 94px;
      height: 100%;
      line-height: 42px;
  }
  .display-block {
    display: block;
    .react-datepicker__input-container {
      display: block;
    }
  }

  .Select--multi .Select-value {
      background-color: #ebf5ff;
      background-color: rgba(185, 113, 111, 0.11);
      border: 1px solid #b9716f;
      border: 1px solid rgba(185, 113, 111, 0.38);
      margin-top: 8px;
      color: #942421;
  }

  .Select--multi .Select-value-icon {
      border-right: 1px solid #ca8e8c;
      border-right: 1px solid rgba(148, 36, 33, 0.26);
  }
  .Select--multi .Select-value-icon {
      margin-bottom: -2px;
  }

  .react-bs-table {
      border: none;
      border-radius: 0;
      margin: 0;
  }

  .table-bordered>tbody>tr>td,
  .table-bordered>tbody>tr>th,
  .table-bordered>tfoot>tr>td,
  .table-bordered>tfoot>tr>th,
  .table-bordered>thead>tr>td,
  .table-bordered>thead>tr>th {
      border: 1px solid #fff;
  }

  .login-fields {
    position: relative;
  }
  .password-fields-inline {
    position: relative;
    .form-control {
      width: 160px;
    }
    .confirm-password-control {
      float: right;
      margin-top: -52px;
      margin-right: 151px;
      @media (max-width: 991px) {
        float: left;
        margin-top: 0;
        margin-right: 0;
        margin-left: -6px;
      }
      @media (max-width: 767px) {
        float: none;
        margin-left: -15px;
      }
    }
  }
  .oferta-agreement-col {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .top-label {
    padding-top: 0 !important;
  }
  .banner-link {
    width: 100%;
    max-width: 186px;
  }
  .avatar-preview {
    text-align: center;
    border-radius: 2px;
    @media (max-width: 767px) {
      max-width: 160px;
    }
  }
  .avatar {
    border-radius: 2px;
    width: 100%;
    max-width: 225px;
  }
  .opponent-avatar {
    max-width: 100%;
  }
  .modal-backdrop {
    z-index: 100;
  }
  *:focus,
  .btn.focus,
  .btn:focus,
  .btn:hover {
    outline: none;
  }
  .btn.active.focus,
  .btn.active:focus,
  .btn.focus,
  .btn:active.focus,
  .btn:active:focus,
  .btn:focus {
    outline: none;
  }
  .turn-screen {
    display: none;
    p {
      text-align: center;
      position: relative;
      top: 35px;
      font-size: 7vw;
    }
    @media (orientation: portrait) {
      display: block;
      background-color: #ffffff;
      background-repeat:no-repeat;
      background-position:center center;
      height: 100%;
      width: 100%;
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
    }
  }
  .OT_subscriber,
  .OT_publisher {
    float: right;
  }
  .OT_publisher {
    width: 30% !important;
    margin-top: 50px;
  }
  .OT_subscriber {
    margin-right: 16%;
    width: 54% !important;
    height: 300px !important;
  }
  .video-duel-container {
    min-height: 300px;
    margin-top: 20px;
  }
  .Select-menu-outer {
    z-index: 4;
  }
  .react-datepicker__day-name, .react-datepicker__day {
    @media (max-width: 991px) {
      width: 1.5rem;
    }
  }
  .opponent-block-image-wrap img {
    max-width:100%;
  }
  .opponent-avatar {
    border-radius: 2px;
  }
  .__react_component_tooltip {
    box-shadow: 0 0 8px rgba(85, 85, 85, 0.25);
  }
  .__react_component_tooltip.show {
    opacity: 1 !important;
  }
  .duelcalendar-wrap {
    @media (max-width: 767px) {
      text-align: center;
      margin-bottom: 30px;
    }
  }
  .close-menu {
    display: none;
    @media (max-width: 767px) {
      display: inline-block;
      position: fixed;
      top: 20px;
      z-index: 12;
      right: 70%;
      margin-right: -55px;
    }
  }
  .menuh {
    display: none;
    @media (max-width: 767px) {
      display: inline-block;
      position: fixed;
      top: 0px;
      z-index: 10;
      right: 15px;
    }
  }
  .opened-mobile-nav {
    .mobile-view-nav,
    .close-menu {
      @media (max-width: 767px) {
        display: block;
      }
    }
  }
  .closed-mobile-nav {
    .mobile-view-nav,
    .close-menu {
      @media (max-width: 767px) {
        display: none;
      }
    }
  }
  .mobile-view-nav li:hover a {
    color: #b34546;
  }
  .menuh {
    img {
      padding: 22px 10px;
    }
  }
  ul.fl-right {
    @media (max-width: 767px) {
      margin-right: 48px;
    }
  }
  .login-fields .form-control--start {
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .login-buttons .form-group {
    @media (max-width: 767px) {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .form-enter-code {
    .form-group--start20 {
      @media (max-width: 767px) {
        display: inline-block;
      }
    }
  }
  .react-datepicker__month-dropdown-container,
  .react-datepicker__year-dropdown-container {
    min-width: 42%;
  }
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow {
     top: 5px;
  }
  .no-results {
    text-align: center;
    margin: 30px;
  }
  .__react_component_tooltip {
    min-width: 500px;
    .col-sm-3 {
      width: 40%;
    }
    .col-sm-9 {
      width: 60%;
    }
  }

  .inputs-in-row {
    position: relative;
  }
  .inline-control {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 17.3%;
  }
  .no-mb,
  .form-group.no-mb {
    margin-bottom: 0;
  }

.dashboard-avatar-container {

}

  .dashboard-avatar-container .avatar-container {
    position: relative;
  }
  .avatar-file-control-container {
    background-image: none;
  }
  .dashboard-avatar-container .avatar-file-control-container {
    position: absolute;
    bottom: 0;
    right: 6px;
    width: 40px;
    height: 40px;
    margin: 0;
    cursor: pointer;
    color: transparent;
  }
  .dashboard-avatar-container .avatar-file-control-container .form-control {
    border: none;
  }

  .col-sm-pl-30 {
    @media (min-width: 768px) {
      padding-left: 30px;
    }
  }

  video{
    max-width: 100%;
  }

  .block-list {
    padding: 20px 0;
    max-width: 360px;
    background-color: #fff;
    border: 1px solid #eee;
}

`;
