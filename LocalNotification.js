import { Permissions, Notifications } from 'expo'


async function alertIfRemoteNotificationsDisabledAsync() {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (status === 'granted') {
    setNotification()
  }else {
  	const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  	if (status === 'granted') {
    	setNotification()
  	}
  }
}


const localnotification = {
	title: 'Play Quiz',
	body: 'Open the app to learn something new!' ,
	android: {
	  sound: true,
	},
	ios: {
	  sound: true,
	}
 }


function tomorrow() {
	var tom = new Date()
	tom.setDate(tom.getDate()+1)
	tom.setHours(2)
	tom.setMinutes(19)
	return tom
}

function setNotification() {

    Notifications.scheduleLocalNotificationAsync(
      localnotification,
      {time:tomorrow(),repeat:'day'}
    );

}


export function setupLocalNotification() {

	Notifications.cancelAllScheduledNotificationsAsync()
	alertIfRemoteNotificationsDisabledAsync()
}

