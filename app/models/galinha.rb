class Galinha < ActiveRecord::Base
  
  has_many :ovos, dependent: :destroy
  
end
