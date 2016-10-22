require 'rails_helper'

RSpec.describe Shout, type: :model do
  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:shouter).class_name('User') }
  end
end
