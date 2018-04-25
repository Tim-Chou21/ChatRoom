# Software Studio 2018 Spring Midterm Project
## Notice
* Replace all [xxxx] to your answer

## Topic
* [Chat_Room]
* Key functions (add/delete)
    1. [chat]
    <img src = 'chat.png'></img>
    2. [load message history]
    <img src = 'load.png'></img>
    3. [chat with new user]
* Other functions (add/delete)
    1. [Sign Up/In with Google or other third-partyaccounts]
    <img src = 'login.png'></img>
    2. [Use CSS animation]
    <img src = 'css.png'></img>
    3. [Proove your website has strong security]
    4.[Add Chrome notification]
    <img src = 'notice.png'></img>

## Basic Components
|Component|Score|Y/N|
|:-:|:-:|:-:|
|Membership Mechanism|20%|N|
|GitLab Page|5%|N|
|Database|15%|N|
|RWD|15%|N|
|Topic Key Function|15%|N|

## Advanced Components
|Component|Score|Y/N|
|:-:|:-:|:-:|
|Third-Party Sign In|2.5%|N|
|Chrome Notification|5%|N|
|Use CSS Animation|2.5%|N|
|Security Report|5%|N|
|Other functions|1~10%|N|

## Website Detail Description
    主要分為兩個網頁，一個是聊天室的網頁，一個是login的網頁。
    
    在聊天室的網頁中大致上可以分為三個區塊，navbar,聊天內容區,暱稱和輸入內容區。
    ##
<img src = 'bar.png'></img>
<img src = 'chat2.png'></img>
<img src = 'id.png'></img>
    
    navbar：有一個account可以往下拉，往下拉後若當前有使用者登入，則會顯示當前使用者的帳戶名稱，且在帳戶名稱下方會有一個logout的按鈕可以登出，反之，若是沒有在沒有使用者登入的情況下則會顯示login的按鈕，點擊即可跳往login的頁面。
    ##
<img src = 'account2.png'></img>
<img src = 'account1.png'></img>

    聊天內容區：在這個區域當中會顯示大家的聊天內容以及自己說的話。
    
    暱稱和輸入內容區：可以設定暱稱，決定顯示在聊天內容區時的名字。在內容的格子中，可以輸入想說的話。在暱稱與內容的格子旁則是送出訊息的按鈕，這個按鈕加了css animation，可以讓按鈕閃爍，提示使用者送出訊息，而為了增加方便性，也讓他在按下enter鍵時也可以送出訊息，不用再移動滑鼠按下按鈕。

    最後是login的網頁，在這個網頁中大部分都是把在lab課實作的內容套用過來的，並且新增了facebook登入的選項。
## Security Report (Optional)
    1.使用firebase的authentication，確保只有在有使用者登入的情況下才能看到聊天的歷史紀錄，若是沒有登入的話則無法看到聊   天內容。
    
    2.https:
        HTTPS (超文字安全傳輸通訊協定) 是一種網際網路通訊協定，可確保資料在使用者的電腦和網站之間傳輸時，保有完整性和機密性。

        透過 HTTPS 傳送的資料非常安全，因為 HTTPS 會透過「傳輸層安全性」通訊協定 (TLS) 提供以下三道重要的資安防護   網：
            1.加密：對交換的資料進行加密，防止資料遭到竊取。也就是說，當使用者在瀏覽網站時，任何人都無法「竊聽」其對話、追蹤他們在多個網頁之間轉換的活動，或竊取其資訊。
    
            2.資料完整性：系統會偵測出資料在傳輸過程中是否遭到有意或無意的修改或破壞。   

            3.驗證：驗證您的使用者是否與預期的網站進行通訊。這能預防攔截式攻擊並建立使用者的信任感，進而促進其他商業利益。變更網站權限，使某些特定東西需要經過詢問才能使用。
    
    3.防止網頁被另存新檔：只支援IE，實作方式是在頁面最上方插入一個不存在的 iframe 利用此方法讓 IE 無法正確的存下網頁而                     導致錯誤

## 使用到的template

網址：https://tutorials.webduino.io/zh-tw/docs/socket/useful/im-1.html
     https://tutorials.webduino.io/zh-tw/docs/socket/useful/im-2.html