/**

Server
모든 것을 홀딩하고 있는 최상위 객체
또한 handleMatchMakeRequest()를 통해 REST API를 제공

MatchMaker
매치 메이킹과 관련된 REST API의 각각의 구현을 담당한다

WebSocketTransport
웹소켓 connect와 disconnect를 처리한다. ping과 terminate도 처리한다

Room
게임 룸



매치 메이킹 순서

 1) 웹으로 REST API로 요청한다 (현재의 서버에게)
 http://localhost:63342/api/file/server/game_server/colyseus/src/Server.ts:213:11

 2) MatchMaker의 joinOrCreate()가 받는다
 http://localhost:63342/api/file/server/game_server/colyseus/src/MatchMaker.ts:58:27

 3) MatchMaker가 받아서 현재 가장 연결수가 적은 서버를 찾은 다음에 해당 서버로 IPC콜을 날린다
 http://localhost:63342/api/file/server/game_server/colyseus/src/MatchMaker.ts:231:19

 3) IPC콜을 받아서 Room객체를 미리 만들고 reservation을 수행한다
 http://localhost:63342/api/file/server/game_server/colyseus/src/MatchMaker.ts:347:4

 4) IPC콜 결과를 받아서 브라우저에게 REST API의 결과로 응답한다
 http://localhost:63342/api/file/server/game_server/colyseus/src/MatchMaker.ts:347:6

 5) 브라우저는 받은 결과를 가지고 게임 서버에 다시 재접속한다
 http://localhost:63342/api/file/server/game_server/colyseus/src/transport/WebSocket/WebSocketTransport.ts:97:20

 6) 게임 서버는 reservation을 확인해서 확실한 경우 방에 접속시킨다
 http://localhost:63342/api/file/server/game_server/colyseus/src/Room.ts:302:12

개선된 매치 메이킹 순서

































*/

