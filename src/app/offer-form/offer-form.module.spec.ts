import { OfferFormModule } from './offer-form.module';

describe('OfferFormModule', () => {
  let offerFormModule: OfferFormModule;

  beforeEach(() => {
    offerFormModule = new OfferFormModule();
  });

  it('should create an instance', () => {
    expect(offerFormModule).toBeTruthy();
  });
});
