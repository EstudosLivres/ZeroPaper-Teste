require 'test_helper'

class OvosControllerTest < ActionController::TestCase
  setup do
    @ovo = ovos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:ovos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create ovo" do
    assert_difference('Ovo.count') do
      post :create, ovo: { cor_branco: @ovo.cor_branco, galinha_id: @ovo.galinha_id, ovo_id: @ovo.ovo_id }
    end

    assert_redirected_to ovo_path(assigns(:ovo))
  end

  test "should show ovo" do
    get :show, id: @ovo
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @ovo
    assert_response :success
  end

  test "should update ovo" do
    patch :update, id: @ovo, ovo: { cor_branco: @ovo.cor_branco, galinha_id: @ovo.galinha_id, ovo_id: @ovo.ovo_id }
    assert_redirected_to ovo_path(assigns(:ovo))
  end

  test "should destroy ovo" do
    assert_difference('Ovo.count', -1) do
      delete :destroy, id: @ovo
    end

    assert_redirected_to ovos_path
  end
end
