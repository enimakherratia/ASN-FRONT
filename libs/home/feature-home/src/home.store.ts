import { signalStore, withState, withMethods, patchState, withHooks } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { inject } from '@angular/core';
import { exhaustMap, pipe } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { HomeService } from './home.service';

export interface HomeState {
  dataSaved: boolean; // Change 'tags' to 'dataSaved', a boolean to track save status
}

export const HomeStore = signalStore(
  { providedIn: 'root' },
  withState<HomeState>({ dataSaved: false }), // Initialize the state with dataSaved set to false
  withMethods((store, homeService = inject(HomeService)) => ({
    saveData: rxMethod<any>(  // Replace `any` with the exact type if needed
      pipe(
        exhaustMap((dataToSave) =>  // `dataToSave` represents the data to be saved
          homeService.saveExcelData(dataToSave).pipe(  // Call the service that saves the data
            tapResponse({
              next: (response) => {
                // Handle the response and update the store's state with dataSaved set to true
                patchState(store, { dataSaved: true });
              },
              error: (error) => {
                // Handle errors if the save operation fails
                console.error('Error saving data:', error);
              },
            }),
          ),
        ),
      ),
    ),
  })),
  withHooks({}), // Add any hooks if necessary in the future
);
