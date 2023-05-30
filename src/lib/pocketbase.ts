import PocketBase from "pocketbase";

import { writable } from "svelte/store";

export const pb = new PocketBase("http://139.162.16.88");

export const currentUser = writable(pb.authStore.model);

// Listen to onChange event when the user is registered
pb.authStore.onChange((auth) => {
	console.log("authStore changed", auth);
	currentUser.set(pb.authStore.model);
});
