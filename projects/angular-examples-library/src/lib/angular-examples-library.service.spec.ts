import { TestBed, inject } from '@angular/core/testing';

import { AngularExamplesLibraryService } from './angular-examples-library.service';

describe('AngularExamplesLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularExamplesLibraryService]
    });
  });

  it('should be created', inject([AngularExamplesLibraryService], (service: AngularExamplesLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
